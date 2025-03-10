import Category from "../model/Blogs/BlogCategory.js";

export const createCategory =async(req,res)=>{
    try{
        const {name}=req.body

        if (!name) {
          return res.status(400).json({ error: "Category name is required" });
        }
          const existingCategory = await Category.findOne({ name });
          if (existingCategory) {
            return res.status(400).json({ error: "Category already exists" });
    }

          const category = new Category({ name });
          await category.save();

          res.status(201).json({ message: "Category created successfully", category });
    }catch(err){
         res.status(500).json({ error: "Internal server error" });

    }
}

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateCategory=async (req, res) => {
  const {id}=req.params
  const {name}=req.body

  const updatedBlogCategory = await Category.findByIdAndUpdate(
        id,
        { name },
        { new: true }
      );

       if (!updatedBlogCategory) {
         return res.status(404).json({ message: "Category not found" });
       }

       res
         .status(200)
         .json({ message: "Category updated successfully", updatedBlogCategory });
}