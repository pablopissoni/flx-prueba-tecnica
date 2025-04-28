import { Form, Input, Select, Modal, Row, Col, Button } from "antd";
import { useEffect } from "react";

/**
 * Componente de modal para crear o editar un usuario.
 * @param {boolean} visible - Indica si el modal está visible o no.
 * @param {function} onCancel - Función a ejecutar al cancelar el modal.
 * @param {function} onFinish - Función a ejecutar al enviar el formulario.
 * @param {object} initialValues - Valores iniciales del formulario (para editar).
 */
const UserFormModal = ({ visible, onCancel, onFinish, initialValues }) => {
  const [form] = Form.useForm();

  // Resetea el formulario cuando cambian los valores iniciales o la visibilidad
  useEffect(() => {
    form.resetFields();
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, visible, form]);

  const message = "Campo requerido";

  return (
    <Modal
      title={initialValues ? "Editar Usuario" : "Agregar Usuario"}
      open={visible}
      onOk={() => form.submit()}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} onFinish={onFinish} layout="vertical" requiredMark={false}>
        <div style={{ borderBottom: "1px solid #dadada", margin: "10px -23px" }}></div>

        {/* Usuario y Email */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="username" label="Usuario" rules={[{ required: true, message: message }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: message }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Nombre y apellido */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="Nombre" rules={[{ required: true, message: message }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastname" label="Apellido" rules={[{ required: true, message: message }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        {/* Estado y Edad */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="status" label="Estado" rules={[{ required: true, message: message }]}>
              <Select>
                <Option value="active">Activo</Option>
                <Option value="inactive">Inactivo</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="age" label="Edad" rules={[{ required: true, message: message }]}>
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ borderBottom: "1px solid #dadada", margin: "10px -23px" }}></div>

        {/* Boton de confirmar */}
        <Row justify="end">
          <Col>
            <Button type="primary" htmlType="submit">
              {initialValues ? "Editar Usuario" : "Agregar Usuario"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default UserFormModal;
