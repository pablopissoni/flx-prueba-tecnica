import { Modal, Typography } from "antd";

const { Text } = Typography;
/**
 * Componente de modal de confirmación para eliminar un usuario.
 * @param {boolean} open - Indica si el modal está abierto o cerrado.
 * @param {function} onOk - Función a ejecutar al confirmar la eliminación.
 * @param {function} onCancel - Función a ejecutar al cancelar la eliminación.
 * @param {string} userName - Nombre del usuario a eliminar.
 */
const ConfirmDeleteUserModal = ({ open, onOk, onCancel, userName }) => {
  return (
    <Modal
      title={"Eliminar Usuario"}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText="Eliminar"
      cancelText="Cancelar"
      okButtonProps={{ danger: true }}
    >
      <div style={{ borderBottom: "1px solid #dadada", margin: "10px -23px" }}></div>

      <p style={{ margin: "30px 5px" }}>
        ¿Está seguro que quiere eliminar al usuario:{" "}
        <Text strong style={{ color: "red" }}>
          @{userName}
        </Text>{" "}
        ?
      </p>
      <div style={{ borderBottom: "1px solid #dadada", margin: "10px -23px" }}></div>
    </Modal>
  );
};

export default ConfirmDeleteUserModal;
