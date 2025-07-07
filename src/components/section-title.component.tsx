type TSectionTitleProps = {
	title: string;

};
export const SectionTitle = ({ title }: TSectionTitleProps) => {
	return (
		<div className='title'>
			<p className='primary-text'>{title}</p>
			
		</div>
	);
};
