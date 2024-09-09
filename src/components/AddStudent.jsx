import { Form } from "react-final-form";
import { Input } from "./Input/Input";

export const AddStudent = () => {
  return (
    <div className="addStudent">
      <Form
        initialValues={null}
        onValuesChange={(values) => {
          // setItem((item) => ({ ...student, ...item, ...values }));
        }}
        layout="vertical"
        hideRequiredMark
      >
        <div className="add-student-form">
          <Form.Item
            name="lastName"
            label="Nom"
            rules={[{ required: true, message: "Merci de renseigner le nom" }]}
          >
            <Input placeholder="Potter" />
          </Form.Item>
          <Form.Item
            name="firstName"
            label="Prénom"
            rules={[
              { required: true, message: "Merci de renseigner le prénom" },
            ]}
          >
            <Input placeholder="Harry" />
          </Form.Item>
        </div>
        {/* <Form.Item
                name="pathwayId"
                label="Formation"
                rules={[{ required: true, message: 'Please choose a pathway' }]}
            >
                <Select>
                    {!loading &&
                        data.pathway.map((path) => (
                            <Option key={path.id}>{path.name}</Option>
                        ))}
                </Select>
            </Form.Item> */}
        {/* <Form.Item
                name="apprentice"
                label="Apprentissage"
            >
                <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        checked={apprentice}
                        onChange={() => setApprentice(!apprentice)}
                    />
            </Form.Item> */}
        {/* {apprentice && 
                <Form.Item
                    name="compagnies"
                    label="Entreprise"
                    rules={[{ required: true, message: 'Please choose a pathway' }]}
                >
                    <Select>
                        {!companies.loading &&
                            companies.data.company.map((company) => (
                                <Option key={company.id}>{company.name}</Option>
                            ))}
                    </Select>
                </Form.Item>
            } */}
      </Form>
    </div>
  );
};
