import { FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchCountries } from "../../api";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
function CountryPicker({ onCountryChange }) {
  const classes = useStyles();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    (async () => {
      setCountries(await fetchCountries());
    })();
  }, [setCountries]);
  return (
    <FormControl variant="filled" className={classes.formControl}>
      <Select native onChange={(e) => onCountryChange(e.target.value)}>
        <option value="">Choose country</option>
        {countries.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}

export default CountryPicker;
