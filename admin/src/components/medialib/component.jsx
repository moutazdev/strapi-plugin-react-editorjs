import React, { useState } from "react";
import PropTypes from "prop-types";

const MediaLibComponent = ({ isOpen, onChange, onToggle }) => {
  // AHLY
  // const { components } = useLibrary();
  const [data, setData] = useState(null);
  const MediaLibraryDialog = components["media-library"];

  const handleInputChange = (data) => {
    if (data) {
      setData(data);
    }
  };

  const handleSelectAssets = (files) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: f.url /* prefixFileUrlWithBackendUrl(f.url) AHLY */,
      width: f.width,
      height: f.height,
      size: f.size,
      mime: f.mime,
      formats: f.formats,
    }));
    onChange(formattedFiles);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <MediaLibraryDialog
      allowedTypes={["images"]}
      onClose={onToggle}
      onInputMediaChange={handleInputChange}
      onSelectAssets={handleSelectAssets}
    />
  );
};

MediaLibComponent.defaultProps = {
  isOpen: false,
  onChange: () => {},
  onToggle: () => {},
};

MediaLibComponent.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
};

export default MediaLibComponent;
