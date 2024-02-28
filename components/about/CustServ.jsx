import { FaSalesforce } from "react-icons/fa";
import { SiVoipdotms } from "react-icons/si";
import { SiMicrosoftoffice } from "react-icons/si";
import { SiZendesk } from "react-icons/si";

function CustServ() {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex items-center gap-9 xl:gap-20">
        <div className="flex  flex-col items-center gap-2">
          <div className="text-4xl text-sky-600 dark:text-sky-300">
            <FaSalesforce />
          </div>
          <div className="text-xs font-medium">Salesforce</div>
        </div>

        <div className="flex  flex-col items-center gap-2">
          <div className="text-4xl text-red-600 dark:text-red-400">
            <SiVoipdotms />
          </div>
          <div className="text-xs font-medium">VOIP</div>
        </div>
        <div className="flex  flex-col items-center gap-2">
          <div className="text-4xl">
            <SiZendesk />
          </div>
          <div className="text-xs font-medium">Zendesk</div>
        </div>
        <div className="flex  flex-col items-center gap-2">
          <div className="text-4xl text-red-800 dark:text-red-500">
            <SiMicrosoftoffice />
          </div>
          <div className="text-xs font-medium">MS Office</div>
        </div>
      </div>
    </div>
  );
}

export default CustServ;
