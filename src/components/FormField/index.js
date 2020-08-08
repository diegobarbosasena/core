import React from 'react'
import PropTypes from 'prop-types'
import { FormFieldWrapper, Input, Label } from './style'

function FormField ({ label, type, name, value, onChange, suggestions }) {
  const fieldId = `id_${name}`
  const isTextArea = type === 'textarea'
  const tag = isTextArea ? 'textarea' : 'input'

  const hasValue = Boolean(value.length)
  const hasSuggestions = Boolean(suggestions.length)

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>

        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          hasValue={hasValue}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />

        <Label.Text>
          {label}
        </Label.Text>

        {
          hasSuggestions &&
          (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion}
                          key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }

      </Label>
    </FormFieldWrapper>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
}

FormField.prototype = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
}

export default FormField
