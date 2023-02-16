import Text from "../../CommonComponents/Inputs/Text/Text";
import SelectAccessCond from "./Inputs/SelectAccessCond";
import SelectHeightSys from "./Inputs/SelectHeightSys";
import SelectRefSystem from "./Inputs/SelectRefSystem";
import SelectRegion from "./Inputs/SelectRegion";
import SelectScale from "./Inputs/SelectScale";
import SelectSecretClass from "./Inputs/SelectSecretClass";
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
                                    defaultOption={state[field.name]} />
      break;
    case 25:
      widget = <SelectSubtype key={field.id} 
                              group={state.group} 
                              label={field.description} 
                              name={field.name}
                              isRequired={field.mandatory}
                              onChangeFunction={func}
                              defaultOption={state[field.name]} />
      break;
    case 2:
    case 7:
      widget = <SelectScale key={field.id} 
                            label={field.description} 
                            name={field.name}
                            isRequired={field.mandatory}
                            onChangeFunction={func}
                            defaultOption={state[field.name]} />
      break;
    case 16:
      widget = <SelectRefSystem key={field.id} 
                                label={field.description} 
                                name={field.name}
                                isRequired={field.mandatory}
                                onChangeFunction={func}
                                defaultOption={state[field.name]} />
      break;
    case 30:
      widget = <SelectHeightSys key={field.id} 
                                label={field.description} 
                                name={field.name}
                                isRequired={field.mandatory}
                                onChangeFunction={func}
                                defaultOption={state[field.name]} />
      break;
    case 19:
      widget = <SelectSecretClass key={field.id} 
                                  label={field.description} 
                                  name={field.name}
                                  isRequired={field.mandatory}
                                  onChangeFunction={func}
                                  defaultOption={state[field.name]} />
      break;
    case 23:
      widget = <SelectAccessCond key={field.id} 
                                  label={field.description} 
                                  name={field.name}
                                  isRequired={field.mandatory}
                                  onChangeFunction={func}
                                  defaultOption={state[field.name]} />
      break;
    case 1:
    case 3:
    case 24:
    case 15:
      widget = <Text key={field.id} 
                      label={field.description} 
                      name={field.name}
                      isRequired={field.mandatory}
                      onChangeFunction={func}
                      value={state[field.name]} />
      break;
    case 26:
      widget = <SelectRegion key={field.id} 
                              label={field.description} 
                              name={field.name}
                              isRequired={field.mandatory}
                              onChangeFunction={func}
                              defaultOption={state[field.name]} />
      break;
    default:
      widget = null;
  };
  return widget;
};

export default selectWidget;
