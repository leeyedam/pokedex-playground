import axios,{AxiosResponse} from "axios";
import { useQueries, UseQueryResult } from "react-query";

import { Ability, AbilityResponse } from "../types";

type RetrunType = AxiosResponse<AbilityResponse>;

const useAbilities = (abilities:Array<Ability>):Array<UseQueryResult<RetrunType,Error>> => {
  const queries = abilities.map(({ability},idx) => ({
    queryKey:['ability', idx],
    queryFn: () => axios.get(ability.url)
  }));

  return useQueries(queries) as Array<UseQueryResult<AxiosResponse<AbilityResponse>,Error>>
}

export default useAbilities;