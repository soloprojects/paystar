import { Request } from "./Request";
import moment from "moment";

 const formateDate = (date, format = "DD/MMM/YYYY") => {
  return moment(date).format(format);
};

export { Request, formateDate };
