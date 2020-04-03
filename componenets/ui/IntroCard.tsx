import React from 'react';
import { HeroSection } from 'styles';
import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';

const IntroCard = () => {
	const URL = 'https://resources.codekeep.io';

	return (
		<HeroSection>
			<div>
				<h3>Free Resources</h3>
				<div className="description">
					#StayHome - Resources to upskill yourself. Curated collection of resources offered for free during
					this COVID-19 times.
					<div className="share">
						Share on
						<a
							target="_BLANK"
							href={`http://facebook.com/sharer/sharer.php?u=${URL}`}
							rel="noreferrer noopener"
						>
							<Facebook size={16} /> Facebook
						</a>
						<a
							target="_BLANK"
							href={`https://twitter.com/intent/tweet?&url=${URL}&hashtags=codekeep`}
							rel="noreferrer noopener"
						>
							<Twitter size={16} /> Twitter
						</a>
					</div>
				</div>
			</div>
			<div></div>
		</HeroSection>
	);
};

export default IntroCard;
