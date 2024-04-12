import { IConImageType } from 'type/post';

type Props = {
  iconType: IConImageType;
};

export default function PostMeta({ iconType }: Props) {
  return (
    <>
      {iconType === IConImageType.ICON_CATEGORY && <div>fontawesome icon</div>}
    </>
  );
}
