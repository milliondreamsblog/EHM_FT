import { Router, Request, Response } from "express";
import { FootprintModel } from "../db";

const FootprintUserRouter = Router();

interface CustomRequest extends Request {
  adminId?: string;
}

// get all footprint
FootprintUserRouter.get(
  "/footprints",
  async (req: CustomRequest, res: Response) => {
    try {
      const footprints = await FootprintModel.find().sort({ createdAt: -1 });

      res.json({
        success: true,
        count: footprints.length,
        data: footprints.map((footprints) => ({
          _id: footprints._id.toString(),
          image: footprints.image || "",
          creatorId: footprints.creatorId.toString(), // convert ObjectId to string
          createdAt: footprints.createdAt,
          updatedAt: footprints.updatedAt,
        })),
      });
    } catch (err: any) {
      res
        .status(500)
        .json({ message: "Error fetching footprints", error: err });
    }
  }
);

//get single blog
FootprintUserRouter.get(
  "/footprints/:id",
  async (req: CustomRequest, res: Response) => {
    try {
      const footprint = await FootprintModel.findById(req.params.id);
      if (!footprint)
        return res.status(404).json({ message: "footprint not found" });

      res.json({
        success: true,
        data: {
          _id: footprint._id.toString(),
          image: footprint.image || "",
          creatorId: footprint.creatorId.toString(),
          createdAt: footprint.createdAt,
          updatedAt: footprint.updatedAt,
        },
      });
    } catch (err) {
      res.status(500).json({ message: "Error fetching footprint", error: err });
    }
  }
);

export { FootprintUserRouter };
