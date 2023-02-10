import { DefaultMeta } from "@/components/Common/DefaultMeta";
import { APP_NAME, DESCRIPTION_SHORT } from "@/modules/const";

export default function Head() {
  const title = `${APP_NAME}: ${DESCRIPTION_SHORT}`;
  return (
    <>
      <title>{title}</title>
      <DefaultMeta />
    </>
  );
}
