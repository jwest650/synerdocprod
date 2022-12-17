import { Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import { FcInfo } from 'react-icons/fc';

const HelpDocumentTip = ({ url }) => {
  return (
    <Link href={`/synerdocuniversity${url ? `/${url}` : ''}`}>
      <div>
        <Tooltip
          hasArrow
          label="Open Help Document"
          fontSize="11px"
          color="white"
        >
          <i>
            <FcInfo className="mb- scale-150" />
          </i>
        </Tooltip>
      </div>
    </Link>
  );
};

export default HelpDocumentTip;
