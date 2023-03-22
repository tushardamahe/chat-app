import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Alert, Button, Modal } from 'rsuite';
import { useModelState } from '../../misc/custom-hooks';

const fileInputTypes = '.png, .jpeg, .jpg';

const acceptedFiles = ['image/png', 'image/jpeg', 'image/pjpeg'];
const isValidFile = file => acceptedFiles.includes(file.type);

const AvatarUploadBtn = () => {
  const { isOpen, open, close } = useModelState();
  const [img, setImg] = useState(null);

  const onFileInputChange = ev => {
    const currFiles = ev.target.files;

    if (currFiles.length === 1) {
      const file = currFiles[0];

      if (isValidFile(file)) {
        setImg(file);
        open();
      } else {
        Alert.warning(`Wrong file type ${file.type}`);
      }
    }
  };

  return (
    <div className="mt-3 text-center">
      <div>
        <label
          htmlFor="avatar-upload"
          className="s-block cursor-pointer padded"
        >
          Select New Avatar
          <input
            id="avatar-upload"
            type="file"
            className="d-none"
            accept={fileInputTypes}
            onChange={onFileInputChange}
          />
        </label>

        <Modal show={isOpen} onHide={close}>
          <Modal.Header>
            <Modal.Title>Adjust and Upload New Avatar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex justify-content-center align-items-center h-100">
              {img && (
                <AvatarEditor
                  image={img}
                  width={200}
                  height={200}
                  border={10}
                  borderRadius={100}
                  rotate={0}
                />
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button block appearance="ghost">
              Upload New Avatar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AvatarUploadBtn;
