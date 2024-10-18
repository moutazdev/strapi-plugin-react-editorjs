import PluginId from "../../pluginId";
import axios from "axios";

// Plugins for Editor.js
import Image from "@editorjs/image";

const requiredTools = {
  image: {
    class: Image,
    config: {
      field: "files.image",
      additionalRequestData: {
        data: JSON.stringify({}),
      },
      additionalRequestHeaders: {
        // AHLY
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI5MTgyMTMzLCJleHAiOjE3MzE3NzQxMzN9.lthiUwLfY7cuEhlfTH3Xh9tA1kHzE-fU53HSQOJmT-I`,
      },
      endpoints: {
        byUrl: `/api/${PluginId}/image/byUrl`,
      },
      uploader: {
        async uploadByFile(file) {
          const formData = new FormData();
          formData.append("data", JSON.stringify({}));
          formData.append("files.image", file);

          const { data } = await axios.post(
            `/api/${PluginId}/image/byFile`,
            formData,
            {
              headers: {
                // AHLY
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzI5MTgyMTMzLCJleHAiOjE3MzE3NzQxMzN9.lthiUwLfY7cuEhlfTH3Xh9tA1kHzE-fU53HSQOJmT-I`,
              },
            },
          );

          return data;
        },
      },
    },
  },
};

export default requiredTools;
