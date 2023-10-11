import { FormControlLabel, Switch } from "@mui/material";
import React from "react";
import CountrySelect from "react-bootstrap-country-select";
export const Popular = () => {
  const [value, setValue] = React.useState(null);

  return (
    <div className="container">
      <form>
        <div class="form-row  justify-content-lg-around mt-3 ">
          <div class=" form-group col-md-6 ">
            {/* <h6>People nearby</h6> */}
            <FormControlLabel
              required
              control={<Switch />}
              label={
                <span
                  class="text-size  text-sm-left"
                  style={{ fontSize: ".8rem" }}
                >
                  NEAR MY AGE
                </span>
              }
            />
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
    </div>
  );
};
