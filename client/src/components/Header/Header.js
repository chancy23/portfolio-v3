import React from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Logo from '../Logo';

import './Header.scss';

const Nav = () => {
	return (
		<GlobalContext.Consumer>
			{context => {
				return (
					<article className='header'>
						<section className='header__logo-wrapper'>
							<Logo />
						</section>
						<section className='header__text-wrapper'>
							<ul className='header__list'>
								<li className='header__list-item'><button className='btn-flat' onClick={context.showAboutModal}>About</button></li>
								<li className='header__list-item'><button className='btn-flat' onClick={context.showResumeModal}>Resume</button></li>
							</ul>
							<h1 className='header__title header__title--flyout'>Chancy Leath</h1>
						</section>
						<section className='header__title'>
							<h1>Chancy Leath</h1>
						</section>
						
					</article>
				)
			}}
		</GlobalContext.Consumer>


	);
};

export default Nav;