import React, { useState, useEffect } from "react";
import API from "../../../api/axios";

export default function FootprintManage() {
  const [footprints, setFootprints] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [isFullViewOpen, setIsFullViewOpen] = useState(false);

  const [formData, setFormData] = useState({ image: null });
  const [selectedFootprint, setSelectedFootprint] = useState(null);

  const fetchFootprints = async () => {
    try {
      setLoading(true);
      const res = await API.get("/footprints");
      setFootprints(res.data.data || []);
    } catch (err) {
      console.error("Error fetching footprints:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFootprints();
  }, []);

  const handleChange = (e) => {
    const { name, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files ? files[0] : null });
    }
  };

  const handleUpload = async () => {
    if (!formData.image) {
      alert("Please select an image to upload.");
      return;
    }
    try {
      const data = new FormData();
      data.append("image", formData.image);

      await API.post("/admin/footprints", data);
      setIsUploadModalOpen(false);
      setFormData({ image: null });
      fetchFootprints();
    } catch (err) {
      console.error("Error uploading footprint:", err);
    }
  };

  const handleDelete = async () => {
    if (!selectedFootprint) return;
    try {
      await API.delete(`/admin/footprints/${selectedFootprint._id}`);
      setIsDeleteConfirmOpen(false);
      setSelectedFootprint(null);
      fetchFootprints();
    } catch (err) {
      console.error("Error deleting footprint:", err);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-[#35582a] underline">
          Manage Footprints
        </h2>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-green-700 transition-colors"
        >
          Upload Footprint
        </button>
      </div>

      {loading ? (
        <p className="text-[#35582a]">Loading footprints...</p>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto"
          style={{ maxHeight: "70vh" }}
        >
          {footprints.map((footprint) => (
            <div
              key={footprint._id}
              className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
            >
              <img
                // ## FIX #1: Use the direct Cloudinary URL ##
                src={footprint.image}
                alt="Footprint"
                className="w-full h-56 object-cover rounded-lg"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4 rounded-lg">
                <button
                  onClick={() => {
                    setSelectedFootprint(footprint);
                    setIsFullViewOpen(true);
                  }}
                  className="w-3/4 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Full View
                </button>
                <button
                  onClick={() => {
                    setSelectedFootprint(footprint);
                    setIsDeleteConfirmOpen(true);
                  }}
                  className="w-3/4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isUploadModalOpen && (
        <Modal
          title="Upload Footprint"
          onClose={() => {
            setIsUploadModalOpen(false);
            setFormData({ image: null });
          }}
          onSubmit={handleUpload}
        >
          <FootprintForm formData={formData} handleChange={handleChange} />
        </Modal>
      )}

      {isFullViewOpen && (
        <Modal
          title="Footprint Full View"
          onClose={() => setIsFullViewOpen(false)}
          hideSubmit={true}
        >
          <div className="max-h-[80vh] overflow-y-auto">
            <img
              // ## FIX #2: Use the direct Cloudinary URL for the modal ##
              src={selectedFootprint.image}
              alt="Full view of footprint"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </Modal>
      )}

      {isDeleteConfirmOpen && (
        <Modal
          title="Confirm Delete"
          onClose={() => setIsDeleteConfirmOpen(false)}
          onSubmit={handleDelete}
        >
          <p className="text-gray-800">
            Are you sure you want to delete this footprint?
          </p>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, children, onClose, onSubmit, hideSubmit }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-3xl shadow-2xl m-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">{title}</h2>
        <div>{children}</div>
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            {hideSubmit ? "Close" : "Cancel"}
          </button>
          {!hideSubmit && (
            <button
              onClick={onSubmit}
              className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function FootprintForm({ formData, handleChange }) {
  const removeImage = () => {
    handleChange({ target: { name: "image", value: null, files: null } });
  };

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Footprint Image
        </label>
        {formData.image ? (
          <div className="flex items-center gap-3 mt-2">
            <p className="text-sm text-gray-700 bg-green-100 px-3 py-1 rounded-full">
              {formData.image.name}
            </p>
            <button
              type="button"
              onClick={removeImage}
              className="text-red-500 font-bold hover:text-red-700 text-xl"
              title="Remove image"
            >
              &times;
            </button>
          </div>
        ) : (
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
          />
        )}
      </div>
    </form>
  );
}
