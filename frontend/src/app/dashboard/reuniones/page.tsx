import Calendario from "../../../components/Calendario/calendario";
import { INITIAL_EVENTS } from "../event-utils";
export default function Page() {
  return <Calendario events={INITIAL_EVENTS} />;
}
