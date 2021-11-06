import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { requestLocations } from "../../store/search/actions";
import { selectLocations } from "../../store/search/selectors";
import { handleSearch } from "../../store/search/reducer";
import { getForecast } from "../../store/forecast/actions";
import { InputWrapper } from "./Search.styles";

export const Search = () => {
  const items = useSelector(selectLocations);
  const dispatch = useDispatch();

  const handleOnSearch = (string) => {
    if (string.trim()) {
      dispatch(handleSearch(string));
      dispatch(requestLocations());
    }
  };

  const handleOnSelect = () => {
    dispatch(getForecast.request());
  };

  return (
    <InputWrapper>
      <ReactSearchAutocomplete
        items={items}
        onSearch={handleOnSearch}
        onSelect={handleOnSelect}
        autoFocus
        placeholder="Enter your location.."
      />
    </InputWrapper>
  );
};
