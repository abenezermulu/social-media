import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      size='35%'
      onClose={() => setModalOpened(false)}
    >
      <form action="" className="infoForm">
        <h3>Your information</h3>

        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="First name"
            name="firstName"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last name"
            name="lastName"
          />
        </div>
        <div>
        <input
            type="text"
            className="infoInput"
            placeholder="Works at"
            name="worksAt"
          />
        </div>
        <div>
        <input
            type="text"
            className="infoInput"
            placeholder="Lives in"
            name="livesIn"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Country"
            name="country"
          />
        </div>
        <div>
        <input
            type="text"
            className="infoInput"
            placeholder="Relationship status"
            name="relationshipStatus"
          />
        </div>
        <div>
          Profile image
          <input type="file" name="profileImg" id="" />
          <input type="file" name="coverImg" id="" />
        </div>

        <button className="button infoButton">Save</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
