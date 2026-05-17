import { useEffect, useState } from 'react'

const defaultProducts = [
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
  }
]

export default function App() {
  const [editorMode, setEditorMode] = useState(() => {
    return localStorage.getItem('mystery-editor-mode') === 'true'
  })

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('mystery-products')
    return saved ? JSON.parse(saved) : defaultProducts
  })

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    description: ''
  })

  useEffect(() => {
    localStorage.setItem('mystery-editor-mode', editorMode)
  }, [editorMode])

  useEffect(() => {
    localStorage.setItem('mystery-products', JSON.stringify(products))
  }, [products])

  const addProduct = () => {
    if (!form.name) return

    setProducts([
      {
        id: Date.now(),
        ...form
      },
      ...products
    ])

    setForm({
      name: '',
      category: '',
      price: '',
      description: ''
    })
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  return (
    <div className="layout">
      <aside className="sidebar">
        <h1>Mystery Store</h1>
        <p className="subtitle">평범한데 이상한 상품들.</p>

        <button
          className="editor-toggle"
          onClick={() => setEditorMode(!editorMode)}
        >
          {editorMode ? '편집자 모드 종료' : '편집자 모드'}
        </button>

        <div className="cart-box">
          <h3>{editorMode ? '편집자 모드 활성화' : '장바구니'}</h3>
          <p>
            {editorMode
              ? '새로고침해도 편집 상태가 유지됩니다.'
              : '누군가 담아두고 사라진 물건 2개'}
          </p>
        </div>

        {editorMode && (
          <div className="editor-panel">
            <h3>상품 추가</h3>

            <input
              placeholder="상품 이름"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="카테고리"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <input
              placeholder="가격"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <textarea
              placeholder="설명"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />

            <button onClick={addProduct}>상품 등록</button>
          </div>
        )}
      </aside>

      <main className="content">
        <section className="hero">
          <div>
            <span className="badge">MYSTERY STORE</span>
            <h2>현실적인 위화감</h2>
            <p>
              분명 실제로 존재할 것 같은데 이상하게 기분 나쁜 물건들을 판매합니다.
            </p>
          </div>
        </section>

        <section className="section-header">
          <h3>상품 목록</h3>
          <span>{products.length}개의 상품</span>
        </section>

        <section className="grid">
          {products.map((product) => (
            <article key={product.id} className="card">
              <div className="image-placeholder">
                <span>{product.category || '미분류'}</span>
              </div>

              <div className="card-body">
                <h4>{product.name}</h4>
                <p>{product.description}</p>

                <div className="card-footer">
                  <strong>{product.price}</strong>

                  {editorMode ? (
                    <button onClick={() => deleteProduct(product.id)}>
                      삭제
                    </button>
                  ) : (
                    <button>담기</button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
