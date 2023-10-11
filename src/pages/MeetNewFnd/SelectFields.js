import React from "react";
import CountrySelect from "react-bootstrap-country-select";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
export const SelectFields = () => {
  const [value, setValue] = React.useState(null);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="container">
      <form>
        <div class="form-row  justify-content-lg-between mt-3 ">
          <div class=" form-group col-md-4 ">
            <CountrySelect value={value} onChange={setValue} />
          </div>
          <div class=" form-group col-md-4 ">
            <CountrySelect value={value} onChange={setValue} />
          </div>
          <div class="form-group col-md-2">
            <select
              class="custom-select mr-sm-2"
              id="inlineFormCustomSelectPref"
            >
              <option selected>Choose...</option>
              <option>Women</option>
              <option>Men</option>
              <option>Both</option>
            </select>
          </div>
        </div>
      </form>
      <div class="custom-control custom-switch text-md-right text-sm-left">
        <FormControlLabel
          required
          control={<Switch />}
          label={
            <span class="text-size  text-sm-left" style={{ fontSize: ".9rem" }}>
              NEAR MY AGE
            </span>
          }
        />
      </div>
    </div>
  );
};
