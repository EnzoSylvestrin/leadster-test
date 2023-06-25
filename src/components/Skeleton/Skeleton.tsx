import SkeletonReact, { SkeletonProps as ISkeletonProps } from 'react-loading-skeleton';

const Skeleton = (props: ISkeletonProps) => {
    return (
        <SkeletonReact
            baseColor='#e9e9e9'
            highlightColor='#b8b8b8'
            {...props}
        />
    );
}

export default Skeleton;