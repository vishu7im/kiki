import { Button } from "@/components/ui/button";

import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div>
      lending
      <div>
        <Link rel="stylesheet" href="/sign-in">
          <Button>Login</Button>
        </Link>
      </div>
      <div className="mt-4">
        <Link rel="stylesheet" href="/sign-up">
          <Button>reqister</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
