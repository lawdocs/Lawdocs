import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSave, FaTimes, FaPlus } from "react-icons/fa";

function BlogCategories() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/blogCategory/all`
      );
      setCategories(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCategory = async () => {
    if (!categoryName.trim()) {
      alert("Category name cannot be empty!");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/blogCategory/create`,
        { name: categoryName }
      );

      if (response.data) {
        setCategories((prev) => [...prev, response.data]);
      }
       fetchCategories();
      setCategoryName("");
    } catch (err) {
      setError(err.response?.data?.message || "Error creating category");
    } finally {
      setLoading(false);
    }
  };

  const handleEditCategory = (id, name) => {
    setCategoryName(name);
    setEditCategoryId(id);
  };

  const handleSaveEdit = async () => {
    if (!categoryName.trim()) {
      alert("Category name cannot be empty!");
      return;
    }
    setLoading(true);
    try {
       await axios.put(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/blogCategory/update/${editCategoryId}`,
        { name: categoryName }
      );
      fetchCategories()

   
      setCategoryName("");
      setEditCategoryId(null);
    } catch (err) {
      setError(err.response?.data?.message || "Error updating category");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/blogCategory/delete/${id}`
      );
      fetchCategories()
    } catch (err) {
      setError(err.response?.data?.message || "Error deleting category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog Categories</h1>

      {error && <p className="text-red-600">{error}</p>}

      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          placeholder="Enter category name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
          disabled={loading}
        />
        <button
          onClick={editCategoryId ? handleSaveEdit : handleCreateCategory}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
          disabled={loading}
        >
          {editCategoryId ? (
            <FaSave className="w-5 h-5" />
          ) : (
            <FaPlus className="w-5 h-5" />
          )}
          <span>{editCategoryId ? "Save" : "Create"}</span>
        </button>
        {editCategoryId && (
          <button
            onClick={() => {
              setEditCategoryId(null);
              setCategoryName("");
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300 flex items-center space-x-2"
            disabled={loading}
          >
            <FaTimes className="w-5 h-5" />
            <span>Cancel</span>
          </button>
        )}
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Category Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {category._id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    {category.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 flex space-x-4">
                    <button
                      onClick={() =>
                        handleEditCategory(category._id, category.name)
                      }
                      className="text-blue-600 hover:text-blue-800"
                      disabled={loading}
                    >
                      <FaEdit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteCategory(category._id)}
                      className="text-red-600 hover:text-red-800"
                      disabled={loading}
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BlogCategories;
