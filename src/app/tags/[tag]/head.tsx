import { DefaultMeta } from "@/components/Common/DefaultMeta";
import { APP_NAME } from "@/modules/const";

export default function Head() {
  const title = `Tag | ${APP_NAME}`;
  return (
    <>
      <title>{title}</title>
      <DefaultMeta />
    </>
  );
}
