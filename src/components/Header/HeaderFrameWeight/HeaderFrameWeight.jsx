import { useState } from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from '../../../hooks/useAuth';
import weightPng from '../../../images/Header/waight_image.png';
import svgIcons from '../../../images/Header/icons.svg';
import {
  WeightImgBorder,
  ImgWeight,
  WeightBtn,
  TextKg,
  TitleWeight,
  TitleWeightNumber,
  SvgEdit,
  WeightFrame,
  WeightContainerBtn,
} from './HeaderFrameWeight.styled';
import { HeaderCurrentWeightModal } from '../HeaderCurrentWeightModal/HeaderCurrentWeightModal';

export const HeaderFrameWeight = () => {
  const [isWeightPanelOpen, setIsWeightPanelOpen] = useState(false);
  const { user } = useAuth();

  const isTabletOrDesktop = useMediaQuery({ minWidth: 834 });
  const isMobile = useMediaQuery({ query: '(max-width: 833px)' });

  const customStyles = {
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0)' },
    content: {
      top: '60px',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translateX(-50%)',
      width: '320px',
      height: '100%',
      padding: '24px 10px',
      border: 'none',
      backgroundColor: '#050505',
      ...(isTabletOrDesktop && {
        top: '100px',
        left: '20%',
        right: 'auto',
        transform: 'translateX(50%)',
        width: '392px',
        height: '200px',
        padding: '20px 24px 0',
        borderRadius: '12px',
        border: 'none',
        backgroundColor: '#0F0F0F',
        boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
        transition: 'top 0.3s ease-in-out',
      }),
    },
  };

  const openPanel = () => {
    setIsWeightPanelOpen(true);
  };

  const closePanel = () => setIsWeightPanelOpen(false);

  return (
    <>
      <WeightFrame>
        <WeightImgBorder>
          <ImgWeight src={`${weightPng}`} alt="waight"></ImgWeight>
        </WeightImgBorder>
        <WeightContainerBtn>
          <TitleWeight>Weight</TitleWeight>
          <WeightBtn onClick={openPanel}>
            <TitleWeightNumber>{user.weight}</TitleWeightNumber>
            <TextKg>kg</TextKg>
            <SvgEdit>
              <use href={`${svgIcons}#icon-edit-2`}></use>
            </SvgEdit>
          </WeightBtn>
        </WeightContainerBtn>
      </WeightFrame>

      <Modal
        isOpen={isWeightPanelOpen}
        onRequestClose={closePanel}
        style={customStyles}
        ariaHideApp={false}
      >
        <HeaderCurrentWeightModal closePanel={closePanel} />
      </Modal>
    </>
  );
};
