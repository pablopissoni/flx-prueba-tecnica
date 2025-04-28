import { Button, Col, Row, Space, Table, Tag } from "antd";
import { useContext, useState } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import ConfirmDeleteUserModal from "../modales/ConfirmDeleteModal";
import UserFormModal from "../modales/UserFormModal";

export const UserList = () => {
  const { users, loading, deleteUser, updateUser } = useContext(UsersContext);

  // Estados para modales
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleDeleteUser = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  // Confirma la eliminacion del usuario
  const handleDeleteConfirm = async () => {
    if (userToDelete) {
      await deleteUser(userToDelete.id);
    }
    setIsDeleteModalOpen(false);
  };

  const handleEditClick = (user) => {
    setCurrentUser(user);
    setIsFormModalOpen(true);
  };

  // Funcion llamada al momento de confirmar edicion en el modal
  const handleFormSubmit = async (values) => {
    if (currentUser) {
      await updateUser(currentUser.id, values);
    }
    setIsFormModalOpen(false);
  };

  const columns = [
    {
      key: "username",
      title: "Usuario",
      dataIndex: "username",
      width: "30%",
    },
    {
      key: "name",
      title: "Nombre",
      dataIndex: "name",
      width: "30%",
    },
    {
      key: "lastname",
      title: "Apellido",
      dataIndex: "lastname",
      width: "30%",
    },
    {
      key: "status",
      title: "Estado",
      dataIndex: "status",
      width: "10%",
      render: (status) => (
        <Tag color={status === "active" ? "green" : "red"}>{status === "active" ? "Activo" : "Inactivo"}</Tag>
      ),
    },
    {
      key: "actions",
      title: "Acciones",
      width: "10%",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" onClick={() => handleEditClick(record)}>
            Editar
          </Button>
          <Button type="link" onClick={() => handleDeleteUser(record)}>
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Row style={{ padding: "0 98px" }}>
        <Col span={24}>
          <Table columns={columns} dataSource={users} pagination={{ pageSize: 9 }} loading={loading} rowKey="id" />
        </Col>
      </Row>
      <ConfirmDeleteUserModal
        open={isDeleteModalOpen}
        onOk={handleDeleteConfirm}
        onCancel={() => setIsDeleteModalOpen(false)}
        userName={userToDelete?.username || ""}
      />
      <UserFormModal
        visible={isFormModalOpen}
        onCancel={() => setIsFormModalOpen(false)}
        onFinish={handleFormSubmit}
        initialValues={currentUser}
        loading={loading}
      />
    </>
  );
};
