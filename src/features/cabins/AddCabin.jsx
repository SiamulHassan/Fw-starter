// import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";

const AddCabin = () => {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button type={"btn-primary"} size={"btn-large"}>
          Add New Cabin
        </Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
      {/* for showing table modal */}
      <Modal.Open opens="table">
        <Button type={"btn-primary"} size={"btn-large"}>
          Show Table
        </Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // return (
  //   <div>
  //     <Button
  //       type={"btn-primary"}
  //       size={"btn-large"}
  //       onClick={() => setIsOpenModal((prev) => !prev)}
  //     >
  //       Add New Cabin
  //     </Button>
  //     {isOpenModal && (
  //       <Modal>
  //         <CreateCabinForm />
  //       </Modal>
  //     )}
  //   </div>
  // );
};

export default AddCabin;
