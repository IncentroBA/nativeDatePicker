import { View, Text, Button } from 'react-native';
import { useState, useEffect, createElement } from 'react';
import DatePicker from 'react-native-date-picker';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var dist = {};

var common$2 = {};

Object.defineProperty(common$2, "__esModule", {
  value: true
});
common$2.ensure = void 0;
function ensure(arg) {
  if (arg == null) {
    throw new Error("Did not expect an argument to be undefined");
  }
  return arg;
}
common$2.ensure = ensure;

var common$1 = {};

Object.defineProperty(common$1, "__esModule", {
  value: true
});
common$1.extractStyles = common$1.mergeNativeStyles = void 0;
function mergeNativeStyles(defaultStyle, overrideStyles) {
  const styles = [defaultStyle, ...overrideStyles.filter(object => object !== undefined)];
  return Object.keys(defaultStyle).reduce((flattened, currentKey) => {
    const styleItems = styles.map(object => object[currentKey]);
    return Object.assign(Object.assign({}, flattened), {
      [currentKey]: flattenObjects(styleItems)
    });
  }, {});
}
common$1.mergeNativeStyles = mergeNativeStyles;
function flattenObjects(objects) {
  return objects.reduce((merged, object) => Object.assign(Object.assign({}, merged), object), {});
}
function extractStyles(source, extractionKeys) {
  if (!source) {
    return [{}, {}];
  }
  return Object.entries(source).reduce(([extracted, rest], [key, value]) => {
    if (extractionKeys.includes(key)) {
      extracted[key] = value;
    } else {
      rest[key] = value;
    }
    return [extracted, rest];
  }, [{}, {}]);
}
common$1.extractStyles = extractStyles;

var common = {};

Object.defineProperty(common, "__esModule", {
  value: true
});
common.parseInlineStyle = void 0;
function parseInlineStyle(style = "") {
  try {
    return style.split(";").reduce((styleObject, line) => {
      const pair = line.split(":");
      if (pair.length === 2) {
        const name = pair[0].trim().replace(/(-.)/g, match => match[1].toUpperCase());
        styleObject[name] = pair[1].trim();
      }
      return styleObject;
    }, {});
  } catch (_) {
    return {};
  }
}
common.parseInlineStyle = parseInlineStyle;

var typings = {};

var PageEditor = {};

Object.defineProperty(PageEditor, "__esModule", {
  value: true
});

(function (exports) {

	var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  var desc = Object.getOwnPropertyDescriptor(m, k);
	  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	    desc = {
	      enumerable: true,
	      get: function () {
	        return m[k];
	      }
	    };
	  }
	  Object.defineProperty(o, k2, desc);
	} : function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  o[k2] = m[k];
	});
	var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
	  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	__exportStar(PageEditor, exports);
} (typings));

var utils = {};

var PageEditorUtils = {};

Object.defineProperty(PageEditorUtils, "__esModule", {
  value: true
});
PageEditorUtils.moveProperty = PageEditorUtils.transformGroupsIntoTabs = PageEditorUtils.changePropertyIn = PageEditorUtils.hideNestedPropertiesIn = PageEditorUtils.hidePropertiesIn = PageEditorUtils.hidePropertyIn = void 0;
function hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKey) {
  modifyProperty((_, index, container) => container.splice(index, 1), propertyGroups, key, nestedPropIndex, nestedPropKey);
}
PageEditorUtils.hidePropertyIn = hidePropertyIn;
function hidePropertiesIn(propertyGroups, _value, keys) {
  keys.forEach(key => modifyProperty((_, index, container) => container.splice(index, 1), propertyGroups, key, undefined, undefined));
}
PageEditorUtils.hidePropertiesIn = hidePropertiesIn;
function hideNestedPropertiesIn(propertyGroups, _value, key, nestedPropIndex, nestedPropKeys) {
  nestedPropKeys.forEach(nestedKey => hidePropertyIn(propertyGroups, _value, key, nestedPropIndex, nestedKey));
}
PageEditorUtils.hideNestedPropertiesIn = hideNestedPropertiesIn;
function changePropertyIn(propertyGroups, _value, modify, key, nestedPropIndex, nestedPropKey) {
  modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey);
}
PageEditorUtils.changePropertyIn = changePropertyIn;
function transformGroupsIntoTabs(properties) {
  const groups = [];
  properties.forEach(property => {
    if (property.propertyGroups) {
      groups.push(...property.propertyGroups);
      property.propertyGroups = [];
    }
  });
  properties.push(...groups);
}
PageEditorUtils.transformGroupsIntoTabs = transformGroupsIntoTabs;
function modifyProperty(modify, propertyGroups, key, nestedPropIndex, nestedPropKey) {
  propertyGroups.forEach(propGroup => {
    var _a;
    if (propGroup.propertyGroups) {
      modifyProperty(modify, propGroup.propertyGroups, key, nestedPropIndex, nestedPropKey);
    }
    (_a = propGroup.properties) === null || _a === void 0 ? void 0 : _a.forEach((prop, index, array) => {
      if (prop.key === key) {
        if (nestedPropIndex === undefined || nestedPropKey === undefined) {
          modify(prop, index, array);
        } else if (prop.objects) {
          modifyProperty(modify, prop.objects[nestedPropIndex].properties, nestedPropKey);
        } else if (prop.properties) {
          modifyProperty(modify, prop.properties[nestedPropIndex], nestedPropKey);
        }
      }
    });
  });
}
function moveProperty(fromIndex, toIndex, properties) {
  if (fromIndex >= 0 && toIndex >= 0 && fromIndex < properties.length && toIndex < properties.length && fromIndex !== toIndex) {
    properties.splice(toIndex, 0, ...properties.splice(fromIndex, 1));
  }
}
PageEditorUtils.moveProperty = moveProperty;

(function (exports) {

	var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  var desc = Object.getOwnPropertyDescriptor(m, k);
	  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	    desc = {
	      enumerable: true,
	      get: function () {
	        return m[k];
	      }
	    };
	  }
	  Object.defineProperty(o, k2, desc);
	} : function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  o[k2] = m[k];
	});
	var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
	  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	__exportStar(PageEditorUtils, exports);
} (utils));

(function (exports) {

	var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  var desc = Object.getOwnPropertyDescriptor(m, k);
	  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	    desc = {
	      enumerable: true,
	      get: function () {
	        return m[k];
	      }
	    };
	  }
	  Object.defineProperty(o, k2, desc);
	} : function (o, m, k, k2) {
	  if (k2 === undefined) k2 = k;
	  o[k2] = m[k];
	});
	var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function (m, exports) {
	  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	__exportStar(common$2, exports);
	__exportStar(common$1, exports);
	__exportStar(common, exports);
	__exportStar(typings, exports);
	__exportStar(utils, exports);
} (dist));

const defaultStyle = {
  container: {}
};
function NativeDatePicker({
  displayModal,
  inputDate,
  inputMaximumDate,
  inputMinimumDate,
  pickerMode,
  style,
  textColor
}) {
  const styles = dist.mergeNativeStyles(defaultStyle, style);
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  function onConfirm(newDate) {
    setOpen(false);
    setDate(newDate);
    inputDate.setValue(newDate);
  }
  useEffect(() => {
    if (inputDate?.status === "available") {
      setDate(inputDate?.value ?? new Date());
      setVisible(true);
    }
  }, [inputDate]);
  if (visible) {
    return createElement(View, {
      style: styles.container
    }, createElement(Text, null, inputDate.displayValue), displayModal ? createElement(Button, {
      title: "Open",
      onPress: () => setOpen(true)
    }) : null, createElement(DatePicker, {
      maximumDate: inputMaximumDate?.value,
      minimumDate: inputMinimumDate?.value,
      textColor: textColor ?? "#000000",
      mode: pickerMode.value,
      modal: displayModal,
      open: open,
      date: date,
      onConfirm: newDate => onConfirm(newDate),
      onDateChange: displayModal === false ? newDate => onConfirm(newDate) : null,
      onCancel: () => setOpen(false),
      fadeToColor: "none"
    }));
  } else return null;
}

export { NativeDatePicker };
