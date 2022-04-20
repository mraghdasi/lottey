import React, { useState } from 'react';
import Card from 'components/UI/Card/Card';
import PageTitle from 'components/UI/Title/PageTitle';
import Devider from 'components/UI/Devider/Devider';
import { Button, Modal, Table } from 'antd';
import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useMemo } from 'react';
import Wrapper from 'components/UI/Wrapper/Wrapper';

const FilmList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [results, setResults] = useState();

  const result = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  useEffect(() => {
    result();
  }, []);

  const columns = [
    {
      title: 'ردیف',
      dataIndex: 'index',
      width: 70,
      key: 'index',
      render: (text, record, index) => {
        return (page - 1) * 50 + (index + 1);
      },
    },
    {
      title: 'آیدی کاربر',
      key: 'userName',
      dataIndex: 'userName',
      render: (text) => {
        if (text.fullName === null) return 'ثبت نشده';
        else return text;
      },
    },
  ];
  const data = [
    { id: 0, userName: 'mo._niko' },
    { id: 1, userName: 'ana.zmn74' },
    { id: 2, userName: 'ardalan__safaei' },
    { id: 3, userName: 'sorena_ak' },
    { id: 4, userName: 'nedaa.hp20' },
    { id: 5, userName: 'mahsaserajj' },
    { id: 6, userName: 'luna____zandi' },
    { id: 7, userName: 'zibaahadzadeh' },
    { id: 8, userName: 'marjaan.m63' },
    { id: 9, userName: 'yashar.serajj' },
    { id: 10, userName: 'itsgisoo2021' },
    { id: 11, userName: 'nedamahyaee' },
    { id: 12, userName: 'abangirl88' },
    { id: 13, userName: 'miss_hh73' },
    { id: 14, userName: 'khanoome.s73' },
    { id: 15, userName: 'mohsenazimi1400' },
    { id: 16, userName: 'ehsangerami12' },
    { id: 17, userName: 'ehsan_barzegr_' },
    { id: 18, userName: 'kkkiiiaaannnaaa' },
    { id: 19, userName: '__s._t_' },
    { id: 20, userName: 'ehsan__hi' },
    { id: 21, userName: 'aki.noroozi' },
    { id: 22, userName: 'mohsengoodarzi22' },
    { id: 23, userName: '67_s_s_67' },
    { id: 24, userName: 'hasneh.78' },
    { id: 25, userName: 'reza_sabersheikh' },
    { id: 26, userName: 'karamiomid4859' },
    { id: 27, userName: 'minahamed1399' },
    { id: 28, userName: 'mrt_negin' },
    { id: 29, userName: 'fatemeh_98_javad' },
    { id: 30, userName: 'apple_construction_group' },
    { id: 31, userName: 'zari_masoumiiii_pv' },
    { id: 32, userName: 'pariya_safavi' },
    { id: 33, userName: '_yeganeh.ab.65_' },
    { id: 34, userName: 'mostajer_khoda68' },
    { id: 35, userName: 'sh.mo1395' },
    { id: 36, userName: 'shar.arehh' },
    { id: 37, userName: '_maryam_sirjani_' },
    { id: 38, userName: 'alireza_h1206' },
    { id: 39, userName: 'atefeh.kefayatmand' },
    { id: 40, userName: 'milad__jeddi' },
    { id: 41, userName: 'mehrdadmehrpoor' },
    { id: 42, userName: 'mahsa_n_h' },
    { id: 43, userName: 'farshbafreza' },
    { id: 44, userName: 'farzad.saleki' },
    { id: 45, userName: 'mahsaef79' },
    { id: 46, userName: '_.dorna.__' },
    { id: 47, userName: 'afsoon_mehrrr' },
    { id: 48, userName: 'jamalfarnia' },
    { id: 49, userName: '_emamimehr.mehta_' },
    { id: 50, userName: 'foad.saleki' },
    { id: 51, userName: 'sonia_.nkm' },
    { id: 52, userName: '_ata.ozlati' },
    { id: 53, userName: 'amin.alavi.t' },
    { id: 54, userName: 'diba_arefii' },
    { id: 55, userName: 'ali_kefayat1344' },
    { id: 56, userName: 'motamedsepide' },
    { id: 57, userName: '___tna_pv' },
    { id: 58, userName: 'masoudgol_' },
    { id: 59, userName: 'meysam_zo8370' },
    { id: 60, userName: 'atlanta_456' },
    { id: 61, userName: 'kartal.global.tr' },
    { id: 62, userName: 'goliii._.karam' },
    { id: 63, userName: 'narciiss.n' },
    { id: 64, userName: 'mah._.naz078' },
    { id: 65, userName: 'melina1.1khoda' },
    { id: 66, userName: 'rozgol1221' },
    { id: 67, userName: 'sahel138078' },
    { id: 68, userName: 'jdy3425' },
    { id: 69, userName: 'sevin_7383' },
    { id: 70, userName: 'somaie5678' },
    { id: 71, userName: 'news_45544' },
    { id: 72, userName: 'mahdisa8130' },
    { id: 73, userName: 'sanaz_199878' },
    { id: 74, userName: 'nasrin.nickravesh' },
    { id: 75, userName: 'arghavan0913' },
    { id: 76, userName: 'sarhadi_moham' },
    { id: 77, userName: 'tanazz.mslm' },
    { id: 78, userName: 'masoumehbaghernejad46' },
    { id: 79, userName: 'sevenup.shop' },
    { id: 80, userName: 'farzaneh_2319' },
    { id: 81, userName: 'mina_700614' },
    { id: 82, userName: 'mina_231900' },
    { id: 83, userName: 'mojgan.nikravesh' },
    { id: 84, userName: 'farshad.karamjani' },
    { id: 85, userName: 'elahe_barati22' },
    { id: 86, userName: 'idiam1992' },
    { id: 87, userName: 'shahna2209' },
    { id: 88, userName: '_bestiha_' },
    { id: 89, userName: 'littlemiss_44' },
    { id: 90, userName: 'new_wallpaper28' },
    { id: 91, userName: 'profile_memoji' },
    { id: 92, userName: 'my_butterfly_love' },
    { id: 93, userName: 'm.kh81_81' },
    { id: 94, userName: '80_i_k_80' },
    { id: 95, userName: 'mahrokh2738' },
    { id: 96, userName: 'dear_lady_11' },
    { id: 97, userName: 'bluegalaxy_01' },
    { id: 98, userName: 'mesle_mah_71' },
    { id: 99, userName: 'dokhte_zemestan' },
    { id: 100, userName: 'miss_paeez1' },
    { id: 101, userName: 'mahroshan2019' },
    { id: 102, userName: 'sahar118228' },
    { id: 103, userName: 'meti.khafan' },
    { id: 104, userName: 'zaboli3884' },
    { id: 105, userName: 'shanimoon69' },
    { id: 106, userName: '_atennstar_' },
    { id: 107, userName: '_._ayrom_._' },
    { id: 108, userName: 'david_moradtalab' },
    { id: 109, userName: 'mahdi_narimani_68' },
    { id: 110, userName: 'fasam612' },
    { id: 111, userName: 'fatemehnorouzi_architect' },
    { id: 112, userName: 'ashkanjamshidi5541' },
    { id: 113, userName: 'kambiznarimani1366' },
    { id: 114, userName: 'fmoradtalab40' },
    { id: 115, userName: '_zahra_k79' },
    { id: 116, userName: 'mahdi_ebrahimi78' },
    { id: 117, userName: 'mr.moodi.80' },
    { id: 118, userName: 'mahla_siroosi' },
    { id: 119, userName: '_aliasghar_1379' },
    { id: 120, userName: 'jafarbahrami3818' },
    { id: 121, userName: 'ali.moslemi2000' },
    { id: 122, userName: 'hamze_.j71' },
    { id: 123, userName: 'hassan_x_051' },
    { id: 124, userName: 'ho_sein9519' },
    { id: 125, userName: 'sajjad.nezamirad' },
    { id: 126, userName: 'shayan_a_20000' },
    { id: 127, userName: 'motahare_ramezani34' },
    { id: 128, userName: 'farnaz_ht83' },
    { id: 129, userName: '_sara_fatemi' },
    { id: 130, userName: 'hamid.reza06' },
    { id: 131, userName: '_fateme_sirvani' },
    { id: 132, userName: 'kimiya_8671' },
    { id: 133, userName: 'abbas.m_ali_zade' },
    { id: 134, userName: 'ahmadbaghri7113' },
    { id: 135, userName: 'amir._.qlz' },
    { id: 136, userName: 'negin_.qolami' },
    { id: 137, userName: 'ali_.y.z' },
    { id: 138, userName: 'amir_79_org' },
    { id: 139, userName: 'king_mammad.405' },
    { id: 140, userName: '_sajadhabibi_' },
    { id: 141, userName: 'maede_arr8' },
    { id: 142, userName: 'milad.vek' },
    { id: 143, userName: 'adel__khatere7' },
    { id: 144, userName: 'nima.nikroo006' },
    { id: 145, userName: 'aliataeei80' },
    { id: 146, userName: 'mohamad_nazari885' },
    { id: 147, userName: 'mojtabaazizi33' },
    { id: 148, userName: 'zahra_niyazi83' },
    { id: 149, userName: 'arash_u_rmi_a' },
    { id: 150, userName: 'zohre_f78' },
    { id: 151, userName: 'vahid_pv3' },
    { id: 152, userName: 'narges_.7149' },
    { id: 153, userName: 'ebirahim1515' },
    { id: 154, userName: 'mr.__.naseri' },
    { id: 155, userName: 'reza_haghghi' },
    { id: 156, userName: 'asef_off' },
    { id: 157, userName: 'l_amir.hp_l' },
    { id: 158, userName: 'mohammad_kh660' },
    { id: 159, userName: 'vahid_mahmoodabadi' },
    { id: 160, userName: '_.abolfazl._3483' },
    { id: 161, userName: 'ashkan.s.t.r1383' },
    { id: 162, userName: 'abas_pfr2' },
    { id: 163, userName: 'mohamad1994610' },
    { id: 164, userName: 'mahziyar_766' },
    { id: 165, userName: '_reza.2020sh' },
    { id: 166, userName: 'maryamrashti64' },
    { id: 167, userName: 'aliadineh21.brj' },
    { id: 168, userName: 'majid_mrcr79' },
    { id: 169, userName: 'ramesh_.6' },
    { id: 170, userName: '_salehmirzaee.as_' },
    { id: 171, userName: '_.editwl7' },
    { id: 172, userName: 'kakamojtaba333' },
    { id: 173, userName: 'reza_taji_4' },
    { id: 174, userName: 'aziz__601' },
    { id: 175, userName: 'aazam.bb.58' },
    { id: 176, userName: 'morteza_63_tajji' },
    { id: 177, userName: 'dariush._.alone313' },
    { id: 178, userName: 'mostefa_4123' },
    { id: 179, userName: 'samira__.82' },
    { id: 180, userName: 'hadi.jafari2005' },
    { id: 181, userName: 'alii.gh74' },
    { id: 182, userName: 'hessm_fraji' },
    { id: 183, userName: 'atenabtin' },
    { id: 184, userName: 'hosein.4858' },
  ];

  const winners = useMemo(
    () => [
      { number: 8, userName: '__tna.pv', isActive: 'فعال', commentCount: 46 },
      { number: 7, userName: '_emamimehr.mehta_', isActive: 'فعال', commentCount: 75 },
      { number: 6, userName: 'aki.noroozi', isActive: 'فعال', commentCount: 236 },
      { number: 5, userName: '_aylar.samadi_', isActive: 'فعال', commentCount: 29 },
      { number: 4, userName: 'mojtabashayesteh_work', isActive: 'فعال', commentCount: 34 },
      { number: 3, userName: 'alireza_shahrzad', isActive: 'فعال', commentCount: 25 },
      { number: 2, userName: 'afsaneh_a.s.n_', isActive: 'فعال', commentCount: 33 },
      { number: 1, userName: 'a.chaharlang', isActive: 'فعال', commentCount: 27 },
    ],
    []
  );

  const winnerResult = () => {
    return winners.pop();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Card>
      <PageTitle title='قرعه کشی بزرگ مسابقه اینستاگرامی' />

      <Modal width={850} onCancel={handleCancel} title={`برنده قرعه کشی شماره (${results?.number})`} visible={isModalVisible} footer={null}>
        <Wrapper>
          <p className='mb-5 m-5'>
            آیدی کاربر : <b className='mr-10'>{results?.userName}</b>
          </p>
          <p className='mb-5 m-8'>
            تعداد منشن : <b className='mr-3'>{results?.commentCount}</b>
          </p>
          <p className='mb-5 m-5'>
            وضعیت فالو : <b className='mr-5'>{results?.isActive}</b>
          </p>
          <p className='mb-5 m-5'>
            وضعیت لایک : <b className='mr-5'>{results?.isActive}</b>
          </p>
        </Wrapper>
      </Modal>

      <Devider>جستجو</Devider>
      {/* <FilmSearch setIsLoading={setIsLoading} setQueryParam={setQueryParam} /> */}

      <div className='text-center'>
        <Button
          onClick={() => {
            setIsLoading(true);

            setTimeout(() => {
              setIsLoading(false);
              setIsModalVisible(true);
              setResults(winnerResult);
            }, 2000);
          }}
          type='primary'
          htmlType='submit'
          className='mr-5 w-52'>
          {isLoading && <LoadingOutlined />}
          قرعه کشی
        </Button>
      </div>

      <Devider>لیست شرکت کنندگان</Devider>
      <Table
        rowKey='id'
        className='w-[600px] m-auto border'
        dataSource={data}
        columns={columns}
        loading={isLoading}
        pagination={{
          pageSize: 50,
          responsive: true,
          onChange(current) {
            setPage(current);
            window.scrollTo(0, 0);
          },
        }}
      />
    </Card>
  );
};

export default FilmList;
