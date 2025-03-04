import { client } from "../main.js";
import {
  learningCenterValidation,
  learningCenterPatchValidation,
  validatePhoneNumber,
} from "../validation/learningcenter.validation.js";

async function findAll(req, res) {
  try {
    let all = await client.learningCenter.findMany({
      include: {
        userEnrolments: {
          include: {
            student: true,
          },
        },
      },
    });

    if (!all.length) {
      return res.status(404).json({ error: "learningCenter Not Found" });
    }
    res.status(200).json({ data: all });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let one = await client.learningCenter.findFirst({
      where: { id: +id },
      include: {
        userEnrolments: {
          include: {
            student: true,
          },
        },
      },
    });

    if (!one) {
      return res.status(404).json({ error: "learningCenter Not Found" });
    }

    res.status(200).json({ data: one });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function create(req, res) {
  try {
    let { error, value } = learningCenterValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { phone, name } = value;

    let checkPN = validatePhoneNumber(phone);
    if (!checkPN) {
      return res.status(400).json({
        message: "Phone Number format is incorrect!Format: +998900000000",
      });
    }

    let checkName = await client.learningCenter.findFirst({ where: { name } });

    if (checkName) {
      return res.status(409).json({ error: "This name is exist" });
    }

    let newlearningCenter = await client.learningCenter.create({ data: value });

    res.status(201).json({ data: newlearningCenter });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let checklearningCenter = await client.learningCenter.findFirst({
      where: { id: +id },
    });

    if (!checklearningCenter) {
      return res.status(404).json({ error: "learningCenter Not Found" });
    }

    let { error, value } = learningCenterPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { phone, name } = value;

    if (phone) {
      let checkPN = validatePhoneNumber(phone);
      if (!checkPN) {
        return res.status(400).json({
          message: "Phone Number format is incorrect!Format: +998900000000",
        });
      }
    }

    if (name) {
      let checkName = await client.learningCenter.findFirst({
        where: { name },
      });

      if (checkName) {
        return res.status(409).json({ error: "This name is exist" });
      }
    }

    let updatelearningCenter = await client.learningCenter.update({
      where: { id: +id },
      data: value,
    });

    res.status(200).json({ data: updatelearningCenter });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let checklearningCenter = await client.learningCenter.findFirst({
      where: { id: +id },
    });

    if (!checklearningCenter) {
      return res.status(404).json({ error: ".learningCenter Not Found" });
    }

    let removelearningCenter = await client.learningCenter.delete({
      where: { id: +id },
    });

    res
      .status(200)
      .json({ message: "Deleted Saccessfully", data: removelearningCenter });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}


async function Search(req, res) {
  try {
    let { page, take, sortField, sortOrder, ...filters } = req.query;

    page = parseInt(page, 10) || 1;
    take = parseInt(take, 10) || 10;
    let skip = (page - 1) * take;

    let orderBy = {};
    if (sortField) {
      orderBy[sortField] = sortOrder?.toLowerCase() === "desc" ? "desc" : "asc";
    } else {
      orderBy = { id: "asc" };
    }

    let where = {};
    Object.keys(filters).forEach((key) => {
      where[key] = { contains: filters[key], mode: "insensitive" };
    });

    let students = await client.learningCenter.findMany({
      where,
      orderBy,
      skip,
      take,
      include: {
        userEnrolments: {
          include: {
            learningCenter: true,
          },
        },
      },
    });

    let totalItems = await client.learningCenter.count({ where });

    if (!students.length) {
      return res.status(404).json({ error: "Students Not Found" });
    }

    return res.status(200).json({
      totalItems,
      totalPages: Math.ceil(totalItems / take),
      currentPage: page,
      data: students,
    });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}


export { findAll, findOne, create, update, remove, Search };
