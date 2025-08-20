import { TagContainer } from './styles';

export type Props = {
    size?: 'grande' | 'pequeno';
    children: string;
};

const Tag = ({ children, size = 'grande' }: Props) => (
    <TagContainer size={size}>{children}</TagContainer>
);

export default Tag;
