import { client } from "../main.js";
import {
  UserEnrolmentValidation,
  UserEnrolmentPatchValidation,
} from "../validation/userenrolment.validation.js";

async function create(req, res) {
  try {
    let { error, value } = UserEnrolmentValidation.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    let chek = await client.userEnrolment.findFirst({
      where: {
        learningCenterId: +value.learningCenterId,
        studentId: +value.studentId,
      },
    });

    if (chek) {
        return res.status(409).json({error: "This student has already graduated from this study center."})
    }

    let newstudent = await client.userEnrolment.create({ data: value });

    res.status(201).json({ data: newstudent });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

async function remove(req, res) {
  try {
    let { id } = req.params;

    let checkstudent = await client.userEnrolment.findFirst({ where: { id: +id } });

    if (!checkstudent) {
      return res.status(404).json({ error: "Not Found" });
    }

    let removestudent = await client.userEnrolment.delete({ where: { id: +id } });

    res
      .status(200)
      .json({ message: "Deleted Saccessfully", data: removestudent });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

export { create, remove };
