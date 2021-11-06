import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../store/search/actions";
import { selectAllLocations } from "../../store/search/selectors";
import { handleSearch } from "../../store/search/reducer";
import { getForecast } from "../../store/forecast/actions";
import { InputWrapper } from "./Search.styles";
import { useCallback } from "react";
import { debounce } from "react-search-autocomplete/dist/utils/utils";

export const Search = () => {
  const items = useSelector(selectAllLocations);
  const dispatch = useDispatch();

  const handleOnSearch = (string) => {
    if (string.trim()) {
      dispatch(handleSearch(string));
      dispatch(getLocations.request());
    }
  };

  const debouncedHandleOnSearch = useCallback(
    debounce(handleOnSearch, 100),
    []
  );

  const handleOnSelect = () => {
    dispatch(getForecast.request());
  };

  return (
    <InputWrapper>
      <ReactSearchAutocomplete
        items={items}
        onSearch={debouncedHandleOnSearch}
        onSelect={handleOnSelect}
        autoFocus
        placeholder="Enter your location.."
      />
    </InputWrapper>
  );
};
