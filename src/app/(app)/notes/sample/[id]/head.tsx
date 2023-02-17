import { DefaultMeta } from "@/components/Common/DefaultMeta";
import { APP_NAME } from "@/modules/const";

export default function Head() {
  const title = `Sample Note | ${APP_NAME}`;
  return (
    <>
      <title>{title}</title>
      <DefaultMeta />
    </>
  );
}
