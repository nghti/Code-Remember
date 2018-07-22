# Redux Form
[Link viblo]((https://viblo.asia/p/co-ban-ve-redux-form-ORNZqNONl0n))

> Gồm ba thành phần chính
- formReducer : function chịu trách nhiệm cập nhật Redux store dựa trên những thay đổi từ app.

- reuduxForm() : là một HOC với đầu vào là một object và đầu ra là một function mới. Sử dụng hàm này để bao lấy form component và bind các hàm xử lý tương tác người dùng và dispatch action tương ứng.

- `<Field/>` : components bên trong form component, dùng để kết nối input component với redux-form logic.

## Luồng dữ liệu
![img](https://images.viblo.asia/6caccc2a-6f36-434c-a3fa-5346c2377f40.png)
> Giả sử ta có một form chứa một text input được bao bới <Field/>. Form này được bao bởi reduxForm(). Luồng dữ liệu sẽ như sau:
```js
Người dùng click vào input
"Focus action" được dispatch
formReducer update state
State được truyền ngược lại đến input component
```
## Demo
[React Alicante 2017](https://github.com/erikras/reactalicante2017)
[Demo in stackblitz]()

```js
import React from 'react'
import { reduxForm, Field } from 'redux-form'
import showResults from './showResults'
import isValidEmail from 'sane-email-validation'
import provinces from '../data/provinces'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!isValidEmail(values.email)) {
    errors.email = 'Invalid Email'
  }
  if (!values.province) {
    errors.province = 'Required'
  }
  return errors
}

const createRenderer = render => ({ input, meta, label, ...rest }) =>
  <div
    className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
    ].join(' ')}
  >
    <label>
      {label}
    </label>
    {render(input, label, rest)}
    {meta.error &&
      meta.touched &&
      <span>
        {meta.error}
      </span>}
  </div>

const RenderInput = createRenderer((input, label) =>
  <input {...input} placeholder={label} />
)

const RenderSelect = createRenderer((input, label, { children }) =>
  <select {...input}>
    {children}
  </select>
)

let DemoForm = ({ handleSubmit, submitting }) =>
  <form onSubmit={handleSubmit(showResults)}>
    <Field name="firstName" label="First Name" component={RenderInput} />
    <Field name="lastName" label="Last Name" component={RenderInput} />
    <Field name="email" label="Email" component={RenderInput} />
    <Field name="province" label="Province" component={RenderSelect}>
      <option />
      {provinces.map(province =>
        <option key={province} value={province}>
          {province}
        </option>
      )}
    </Field>
    <button type="submit" disabled={submitting}>
      Submit
    </button>
  </form>

DemoForm = reduxForm({
  form: 'demo',
  destroyOnUnmount: false,
  validate
})(DemoForm)
export default DemoForm
```