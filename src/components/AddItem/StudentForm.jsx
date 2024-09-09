import { useState } from "react";
import { useIntl } from "react-intl";
import { toCapitalized } from "../../utils/formatText";
import { Checkbox } from "../Checkbox/Checkbox";
import { Field } from "../Field/Field";
import { Form as Bubble_CraftForm } from "../Form/Form";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import "./addItem.css";

export const StudentForm = ({ onSubmit, companies, pathways, calendars }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { formatMessage } = useIntl();
  return (
    <Bubble_CraftForm
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, values }) => (
        <form onSubmit={handleSubmit} id="student-form">
          <Field
            name="email"
            label={toCapitalized(formatMessage({ id: "email" }))}
            rules={[{ required: true, message: "Merci de renseigner l'email" }]}
          >
            {(props) => (
              <div>
                {props.label}
                <Input
                  type="email"
                  placeholder="jeanne.dupuis@emil.com"
                  {...props.input}
                />
              </div>
            )}
          </Field>
          <Field
            name="lastname"
            label={toCapitalized(formatMessage({ id: "lastname" }))}
            rules={[{ required: true, message: "Merci de renseigner le nom" }]}
          >
            {(props) => (
              <div>
                {props.label}
                <Input placeholder="Dupuis" {...props.input} />
              </div>
            )}
          </Field>
          <Field
            name="firstname"
            label={toCapitalized(formatMessage({ id: "firstname" }))}
            rules={[
              { required: true, message: "Merci de renseigner le prénom" },
            ]}
          >
            {(props) => (
              <div>
                {props.label}
                <Input placeholder="Jeanne" {...props.input} />
              </div>
            )}
          </Field>
          <Field
            name="pathway_id"
            label={toCapitalized(formatMessage({ id: "pathway" }))}
            rules={[
              { required: true, message: "Merci de renseigner la formation" },
            ]}
          >
            {(props) => (
              <div className="size">
                {props.label}
                <Select
                  className="size"
                  placeholder="pathway"
                  options={pathways?.map((pathway) => ({
                    value: pathway.id,
                    label: pathway.name,
                  }))}
                  {...props.input}
                />
              </div>
            )}
          </Field>
          <Field
            name="calendar"
            label={toCapitalized(formatMessage({ id: "calendar" }))}
          >
            {(props) => (
              <div className="size">
                {props.label}
                <Select
                  placeholder="calendar"
                  options={calendars?.map((calendar) => ({
                    value: calendar.id,
                    label: calendar.name,
                  }))}
                  {...props.input}
                />
              </div>
            )}
          </Field>
          <div className="apprentice">
            <Field
              name="apprentice"
              label={toCapitalized(formatMessage({ id: "apprentice" }))}
              rules={[
                {
                  required: true,
                  message: "Merci de renseigner l'apprentissage",
                },
              ]}
            >
              {(props) => (
                <div>
                  <Checkbox
                    {...props.input}
                    onChange={() => setIsChecked(!isChecked)}
                  >
                    {props.label}
                  </Checkbox>
                </div>
              )}
            </Field>
            {isChecked && (
              <Field
                name="company"
                label={toCapitalized(formatMessage({ id: "company" }))}
                rules={[
                  {
                    required: true,
                    message: "Merci de renseigner l'entreprise",
                  },
                ]}
              >
                {(props) => (
                  <div className="company">
                    {props.label}
                    <Select
                      placeholder="company"
                      options={companies?.map((company) => ({
                        value: company.id,
                        label: company.name,
                      }))}
                      {...props.input}
                    />
                  </div>
                )}
              </Field>
            )}
          </div>
        </form>
      )}
    />
  );
};
