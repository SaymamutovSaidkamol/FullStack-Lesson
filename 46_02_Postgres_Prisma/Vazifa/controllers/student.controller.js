import { client } from "../main.js";
import {
  StudentValidation,
  StudentPatchValidation,
  validatePhoneNumber,
} from "../validation/student.validation.js";

async function findAll(req, res) {
  try {
    let all = await client.student.findMany({
      include: {
        userEnrolments: {
          include: {
            learningCenter: true,
          },
        },
      },
    });

    if (!all.length) {
      return res.status(404).json({ error: "student Not Found" });
    }
    res.status(200).json({ data: all });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function findOne(req, res) {
  try {
    let { id } = req.params;

    let one = await client.student.findFirst({
      where: { id: +id },
      include: {
        userEnrolments: {
          include: {
            learningCenter: true,
          },
        },
      },
    });

    if (!one) {
      return res.status(404).json({ error: "student Not Found" });
    }

    res.status(200).json({ data: one });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function create(req, res) {
  try {
    let { error, value } = StudentValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { phone } = value;

    let checkPN = validatePhoneNumber(phone);
    if (!checkPN) {
      return res.status(400).json({
        message: "Phone Number format is incorrect!Format: +998900000000",
      });
    }

    let newstudent = await client.student.create({ data: value });

    res.status(201).json({ data: newstudent });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function update(req, res) {
  try {
    let { id } = req.params;

    let checkstudent = await client.student.findFirst({ where: { id: +id } });

    if (!checkstudent) {
      return res.status(404).json({ error: "student Not Found" });
    }

    let { error, value } = StudentPatchValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let { phone } = value;

    if (phone) {
      let checkPN = validatePhoneNumber(phone);
      if (!checkPN) {
        return res.status(400).json({
          message: "Phone Number format is incorrect!Format: +998900000000",
        });
      }
    }

    let updatestudent = await client.student.update({
      where: { id: +id },
      data: value,
    });

    res.status(200).json({ data: updatestudent });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let checkstudent = await client.student.findFirst({ where: { id: +id } });

    if (!checkstudent) {
      return res.status(404).json({ error: "student Not Found" });
    }

    let removestudent = await client.student.delete({ where: { id: +id } });

    res
      .status(200)
      .json({ message: "Deleted Saccessfully", data: removestudent });
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

    let students = await client.student.findMany({
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

    let totalItems = await client.student.count({ where });

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
