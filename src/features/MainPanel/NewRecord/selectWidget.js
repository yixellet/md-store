import SelectStorageFormat from "./Inputs/SelectStorageFormat";
import SelectSubtype from "./Inputs/SelectSubtype";

const selectWidget = (field, func, state) => {
  let widget;
  switch (field.id) {
    case 5:
      widget = <SelectStorageFormat key={field.id} 
                                    group={state.group} 
                                    label={field.description} 
                                    name={field.name}
                                    isRequired={field.mandatory}
                                    onChangeFunction={func}
                                    defaultOption={state.storageformat_ref} />
      break;
    case 25:
      widget = <SelectSubtype key={field.id} 
                              group={state.group} 
                              label={field.description} 
                              name={field.name}
                              isRequired={field.mandatory}
                              onChangeFunction={func}
                              defaultOption={state.subtype_ref} />
      break;
    default:
      widget = null;
  };
  return widget;
};

export default selectWidget;
