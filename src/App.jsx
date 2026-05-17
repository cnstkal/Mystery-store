const products = [
  {
    id: 1,
    name: '어젯밤의 지하철 티켓',
    category: '기록물',
    price: '29,000원',
    description: '사용한 적 없는 티켓인데 희미한 손때가 묻어 있다.'
  },
  {
    id: 2,
    name: '습기 먹은 안내방송 카세트',
    category: '전자기기',
    price: '81,000원',
    description: '재생하면 가끔 당신 이름이 섞여 나온다.'
  },
  {
    id: 3,
    name: '누군가 두고 간 컵',
    category: '생활용품',
    price: '14,000원',
    description: '평범한 컵인데 물을 따르면 아주 잠깐 떨린다.'
  },
  {
    id: 4,
    name: '한 번 접힌 편의점 영수증',
    category: '종이류',
    price: '9,000원',
    description: '날짜 부분이 계속 오늘로 바뀐다.'
  }
]

const categories = [
  '홈',
  '기묘한 생활용품',
  '분실물',
  '전자기기',
  '문서',
  '마이페이지',
  '장바구니'
]

export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h1>Mystery Store</h1>
        <p className="subtitle">설명하기 어려운 물건들.</p>

        <nav>
          {categories.map((item) => (
            <button key={item} className="menu-button">
              {item}
            </button>
          ))}
        </nav>

        <div className="cart-box">
          <h3>장바구니</h3>
          <p>누군가 담아두고 사라진 물건 2개</p>
          <button>결제하기</button>
        </div>
      </aside>

      <main className="content">
        <section className="hero">
          <div>
            <span className="badge">NEW ARRIVAL</span>
            <h2>평범한데 이상한 물건들</h2>
            <p>
              매일 스쳐 지나가는 것 같은데 이상하게 기억에 남는 물건들을 판매합니다.
              오컬트보다는 현실에 가까운 불쾌한 위화감.
            </p>
          </div>

          <div className="hero-card">
            <small>오늘 가장 많이 본 상품</small>
            <strong>창문 없는 디지털 시계</strong>
            <p>새벽 4시 13분에서 자꾸 멈춘다.</p>
          </div>
        </section>

        <section className="section-header">
          <h3>추천 상품</h3>
          <span>총 47개의 이상한 상품</span>
        </section>

        <section className="grid">
          {products.map((product) => (
            <article key={product.id} className="card">
              <div className="image-placeholder">
                <span>{product.category}</span>
              </div>

              <div className="card-body">
                <h4>{product.name}</h4>
                <p>{product.description}</p>

                <div className="card-footer">
                  <strong>{product.price}</strong>
                  <button>담기</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mypage">
          <div>
            <h3>마이페이지</h3>
            <p>최근 조회한 상품: "비에 젖지 않는 우산"</p>
          </div>

          <div>
            <h3>배송 상태</h3>
            <p>택배가 아직 출발하지 않았는데 도착 예정 알림이 왔습니다.</p>
          </div>
        </section>
      </main>
    </div>
  )
}
