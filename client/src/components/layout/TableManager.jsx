import { Button, Col, Flex, Input, Row, Select, Space } from "antd";
import { useContext, useState } from "react";
import { UsersContext } from "../../contexts/UsersContext";
import UserFormModal from "../modales/UserFormModal";

export const TableManager = () => {
  const { filters, setFilters, loading, createUser } = useContext(UsersContext);
  const { Search } = Input;
  const [showFormModal, setShowFormModal] = useState(false);

  // Opciones para el selector de estado
  const options = [
    { value: "", label: "Todos" },
    { value: "active", label: "Activos" },
    { value: "inactive", label: "Inactivos" },
  ];

  const handleStatusChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      status: value,
    }));
  };

  function handleSearch(value) {
    const trimmedValue = value.trim(); // Eliminar espacios en blanco al principio y al final
    setFilters((prev) => ({ ...prev, search: trimmedValue }));
  }

  function handleChange(value) {
    if (!value) {
      setFilters((prev) => ({ ...prev, search: "" }));
    }
    return;
  }

  function handleCreateUser() {
    setShowFormModal(true);
  }

  const handleFormSubmit = async (values) => {
    await createUser(values);
    setShowFormModal(false);
  };

  return (
    <Row justify="space-between" align="middle" style={{ padding: "0 98px", marginBottom: "20px" }}>
      <Col>
        <Space>
          {/* Buscar usuario por nombre o apellido */}
          <Search
            size="large"
            placeholder="Buscar usuarios"
            onChange={(e) => handleChange(e.target.value)}
            onSearch={handleSearch}
            style={{ width: 300 }}
            allowClear
            loading={loading}
          />

          {/* Filtro por estado activo/inactivo/todos*/}
          <Select
            value={filters.status}
            onChange={handleStatusChange}
            options={options}
            size="large"
            style={{ width: 210 }}
            loading={loading}
          />
        </Space>
      </Col>
      {/* Boton para agregar un nuevo usuario */}
      <Col>
        <Button type="primary" size="large" onClick={handleCreateUser} loading={loading}>
          Agregar Usuario
        </Button>
      </Col>
      {/* Modal para crear nuevo usuario */}
      <UserFormModal
        visible={showFormModal}
        onCancel={() => setShowFormModal(false)}
        onFinish={handleFormSubmit}
        loading={loading}
      />
    </Row>
  );
};
