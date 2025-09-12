import { Router, Request, Response } from "express";
import { CaseStudyModel } from "../db"; // Changed to CaseStudyModel

const CaseStudyUserRouter = Router();

// GET all case studies
CaseStudyUserRouter.get("/casestudies", async (req: Request, res: Response) => {
  try {
    const caseStudies = await CaseStudyModel.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: caseStudies.length,
      data: caseStudies,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Error fetching case studies",
      error: err.message,
    });
  }
});

// GET a single
CaseStudyUserRouter.get(
  "/casestudies/:id",
  async (req: Request, res: Response) => {
    try {
      const caseStudy = await CaseStudyModel.findById(req.params.id);
      if (!caseStudy) {
        return res
          .status(404)
          .json({ success: false, message: "Case study not found" });
      }

      res.json({
        success: true,
        data: caseStudy,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Error fetching case study",
        error: err.message,
      });
    }
  }
);

// GET all case studies by author
CaseStudyUserRouter.get(
  "/casestudies/author/:authorName",
  async (req: Request, res: Response) => {
    try {
      const authorName = decodeURIComponent(req.params.authorName);
      const caseStudies = await CaseStudyModel.find({
        author: authorName,
      }).sort({
        createdAt: -1,
      });

      if (!caseStudies || caseStudies.length === 0) {
        return res.status(404).json({
          success: false,
          message: `No case studies found for author: ${authorName}`,
        });
      }

      res.json({
        success: true,
        count: caseStudies.length,
        data: caseStudies,
      });
    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: "Error fetching author's case studies",
        error: err.message,
      });
    }
  }
);

export { CaseStudyUserRouter };
