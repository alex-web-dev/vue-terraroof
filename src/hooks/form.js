export function useForm() {
  function formValidate(formData) {
    let hasError = false;
  
    formData.items.forEach((item) => {
      for (let validationItem of item.validation) {
        if (validationItem.type === 'required' && !item.value) {
          item.showErrorText = validationItem.errorText;
          item.isError = hasError = true;
          break;
        }
  
        if (validationItem.type === 'mask' && !validationItem.value.test(item.value)) {
          item.showErrorText = validationItem.errorText;
          item.isError = hasError = true;
        }
      }
    });
  
    return !hasError;
  }
  
  function clearError(item) {
    item.isError = false;
  }
  
  function clearValues(items) {
    items.forEach((item) => (item.value = ''));
  }

  return { formValidate, clearError, clearValues };
}