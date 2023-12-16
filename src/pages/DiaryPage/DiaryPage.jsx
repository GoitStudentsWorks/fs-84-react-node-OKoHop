import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import ItemsToAdd from '../../components/DiaryPage/ItemsToAdd';
import ElementOfFood from '../../components/DiaryPage/ElementOfFood';
import {
  selectMacronutrientsPerDay,
  selectProductsForBreakfast,
  selectConsumedProductsForDinner,
  selectProductsForLunch,
  selectProductsForSnack,
} from '../../redux/statistics/statisticSelectors';
import { getArrayToRenderDiary } from '../../helpers/getArrayToRenderDiary';

import breakfastImg from '../../images/diaryPageImages/breakfast.png';
import dinnerImg from '../../images/diaryPageImages/dinner.png';
import lunchImg from '../../images/diaryPageImages/lunch.png';
import snackImg from '../../images/diaryPageImages/snack.png';
import arrowRight from '../../images/diaryPageImages/arrow-right.svg';

import {
  Section,
  Container,
  MainHeaderBlock,
  BackLink,
  ArrowReturn,
  MainHeader,
  DiaryWrap,
  DiaryItem,
  BlockGeneralInfo,
  ThumbImg,
  Img,
  Title,
  BlockDetailedInformation,
  ListOfDishes,
  BlockHeader,
} from './DiaryPage.styled';

const DiaryPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/main');

  const consumedMacronutrients = useSelector(
    selectMacronutrientsPerDay
  );
  const breakfastFoodIntake = useSelector(selectProductsForBreakfast);
  const lunchFoodIntake = useSelector(selectProductsForLunch);
  const dinnerFoodIntake = useSelector(selectConsumedProductsForDinner);
  const snackFoodIntake = useSelector(selectProductsForSnack);

  const {
    breakfast: breakfastInfo,
    lunch: lunchInfo,
    dinner: dinnerInfo,
    snack: snackInfo,
  } = consumedMacronutrients;

  return (
    <Section>
      <Container>
        <MainHeaderBlock>
          <BackLink to={backLinkLocationRef.current}>
            <ArrowReturn src={arrowRight} alt="arrow right" />
          </BackLink>
          <MainHeader>Diary</MainHeader>
        </MainHeaderBlock>

        <DiaryWrap>
          <DiaryItem>
            <BlockGeneralInfo>
              <BlockHeader>
                <ThumbImg>
                  <Img src={breakfastImg} alt="Breakfast on a plate" />
                </ThumbImg>
                <Title>Breakfast</Title>
              </BlockHeader>
              <ItemsToAdd info={breakfastInfo} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(breakfastFoodIntake, 'Breakfast').map(
                  (item, index) => (
                    <ElementOfFood
                      item={item}
                      key={nanoid()}
                      index={index}
                      img={breakfastImg}
                    />
                  )
                )}
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>

          <DiaryItem>
            <BlockGeneralInfo>
              <BlockHeader>
                <ThumbImg>
                  <Img src={lunchImg} alt="Lunch on a plate" />
                </ThumbImg>
                <Title>Lunch</Title>
              </BlockHeader>
              <ItemsToAdd info={lunchInfo} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(lunchFoodIntake, 'Lunch').map(
                  (item, index) => (
                    <ElementOfFood
                      item={item}
                      key={nanoid()}
                      index={index}
                      img={lunchImg}
                    />
                  )
                )}
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>

          <DiaryItem>
            <BlockGeneralInfo>
              <BlockHeader>
                <ThumbImg>
                  <Img src={dinnerImg} alt="Dinner on a plate" />
                </ThumbImg>
                <Title>Dinner</Title>
              </BlockHeader>
              <ItemsToAdd info={dinnerInfo} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(dinnerFoodIntake, 'Dinner').map(
                  (item, index) => (
                    <ElementOfFood
                      item={item}
                      key={nanoid()}
                      index={index}
                      img={dinnerImg}
                    />
                  )
                )}
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>

          <DiaryItem>
            <BlockGeneralInfo>
              <BlockHeader>
                <ThumbImg>
                  <Img src={snackImg} alt="Snack on a plate" />
                </ThumbImg>
                <Title>Snack</Title>
              </BlockHeader>
              <ItemsToAdd info={snackInfo} />
            </BlockGeneralInfo>
            <BlockDetailedInformation>
              <ListOfDishes>
                {getArrayToRenderDiary(snackFoodIntake, 'Snack').map(
                  (item, index) => (
                    <ElementOfFood
                      item={item}
                      key={nanoid()}
                      index={index}
                      img={snackImg}
                    />
                  )
                )}
              </ListOfDishes>
            </BlockDetailedInformation>
          </DiaryItem>
        </DiaryWrap>
      </Container>
    </Section>
  );
};

export default DiaryPage;