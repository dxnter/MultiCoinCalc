using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Newtonsoft.Json;
using System.Linq;


namespace MultiCoinCalc.Models
{
    public class ModelStateTransferValue
    {
        public string Key { get; set; }
        public string AttemptedValue { get; set; }
        public object RawValue { get; set; }
        public ICollection<string> ErrorMessages { get; set; } = new List<string>();
    }

    public static class ModelStateHelpers
    {
        public static string SerialiseModelState(ModelStateDictionary modelState)
        {
            var errorList = modelState
                .Select(keyvaluepr => new ModelStateTransferValue
                {
                    Key = keyvaluepr.Key,
                    AttemptedValue = keyvaluepr.Value.AttemptedValue,
                    RawValue = keyvaluepr.Value.RawValue,
                    ErrorMessages = keyvaluepr.Value.Errors.Select(err => err.ErrorMessage).ToList(),
                });

            return JsonConvert.SerializeObject(errorList);
        }

        public static ModelStateDictionary DeserialiseModelState(string serialisedErrorList)
        {
            var errorList = JsonConvert.DeserializeObject<List<ModelStateTransferValue>>(serialisedErrorList);
            var modelState = new ModelStateDictionary();

            foreach (var item in errorList)
            {
                modelState.SetModelValue(item.Key, item.RawValue, item.AttemptedValue);
                foreach (var error in item.ErrorMessages)
                {
                    modelState.AddModelError(item.Key, error);
                }
            }
            return modelState;
        }
    }
}
