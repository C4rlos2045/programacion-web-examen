import React, { useState } from 'react'

const styles = {
  page: {
    padding: 20,
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  pageTitle: {
    margin: 0,
    fontSize: 28,
    color: '#1f2937',
  },
  actionGroup: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
  },
  actionButton: {
    padding: '10px 16px',
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    background: '#f8fafc',
    color: '#111827',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  actionButtonActive: {
    background: '#2563eb',
    color: '#ffffff',
    borderColor: '#1d4ed8',
  },
  workspaceWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  workspaceHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  workspaceStatus: {
    color: '#475569',
    fontSize: 14,
    minWidth: 160,
  },
  workspaceBody: {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap',
  },
  leftPanel: {
    width: '100%',
    maxWidth: 440,
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    padding: 16,
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    background: '#ffffff',
  },
  inputLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 14,
    color: '#111827',
    gap: 6,
  },
  inputField: {
    padding: '10px 12px',
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    outline: 'none',
    fontSize: 14,
  },
  acceptRow: {
    marginTop: 8,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  acceptBtn: {
    padding: '10px 18px',
    background: '#16a34a',
    color: '#ffffff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
  },
  rightPanel: {
    flex: 1,
    minWidth: 320,
    padding: 16,
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    background: '#ffffff',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: 14,
  },
  th: {
    padding: '12px 10px',
    border: '1px solid #e2e8f0',
    textAlign: 'left',
    background: '#f8fafc',
  },
  td: {
    padding: '12px 10px',
    border: '1px solid #e2e8f0',
  },
  editBtn: {
    padding: '6px 10px',
    border: '1px solid #cbd5e1',
    borderRadius: 6,
    background: '#ffffff',
    cursor: 'pointer',
  },
  submenuContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
  dropdown: {
    position: 'relative',
  },
  dropdownToggle: {
    padding: '10px 14px',
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    background: '#ffffff',
    cursor: 'pointer',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    left: 0,
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: 10,
    boxShadow: '0 12px 20px rgba(15, 23, 42, 0.08)',
    zIndex: 10,
    minWidth: 180,
    padding: 8,
  },
  dropdownItemWrapper: {
    listStyle: 'none',
  },
  dropdownItem: {
    width: '100%',
    padding: '10px 12px',
    border: 'none',
    background: 'transparent',
    textAlign: 'left',
    cursor: 'pointer',
    borderRadius: 8,
  },
  submenuButtons: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
  },
  submenuBtn: {
    padding: '10px 14px',
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    background: '#f8fafc',
    cursor: 'pointer',
  },
  activeButton: {
    background: '#e0f2fe',
    borderColor: '#38bdf8',
  },
  errorText: {
    color: '#dc2626',
    fontSize: 12,
    marginTop: 4,
  },
  inputError: {
    borderColor: '#dc2626',
    background: '#fef2f2',
  },
}

function CrudHeader() {
  return (
    <div style={styles.headerContainer}>
      <h2 style={styles.pageTitle}>CRUD - Programación Web</h2>
    </div>
  )
}

function SubMenu({ items = [], active, onSelect, dropdownOnly = true }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={styles.submenuContainer}>
      <div style={styles.dropdown}>
        <button style={styles.dropdownToggle} onClick={() => setOpen(!open)}>
          {active} ▾
        </button>
        {open && (
          <ul style={styles.dropdownMenu}>
            {items.map(it => (
              <li key={it} style={styles.dropdownItemWrapper}>
                <button
                  style={it === active ? { ...styles.dropdownItem, ...styles.activeButton } : styles.dropdownItem}
                  onClick={() => { onSelect(it); setOpen(false) }}
                >
                  {it}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {!dropdownOnly && (
        <div style={styles.submenuButtons}>
          {items.map(it => (
            <button
              key={it}
              style={it === active ? { ...styles.submenuBtn, ...styles.activeButton } : styles.submenuBtn}
              onClick={() => onSelect(it)}
            >
              {it}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Workspace({ section, onSectionChange }) {
  const empty = { nombre: '', descripcion: '', sku: '', precio: '', cantidad: '' }
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})

  const sampleRecords = [
    { id: 1, nombre: 'Ejemplo A', descripcion: 'Descripción A', sku: 'SKU-001', precio: '10.00', cantidad: '5' },
    { id: 2, nombre: 'Ejemplo B', descripcion: 'Descripción B', sku: 'SKU-002', precio: '25.00', cantidad: '12' }
  ]

  const [records, setRecords] = useState(sampleRecords)
  const [editingId, setEditingId] = useState(null)
  const [viewType, setViewType] = useState('table') // 'table' | 'cards' | 'list' | 'grid'

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es requerido'
    if (!form.descripcion.trim()) newErrors.descripcion = 'La descripción es requerida'
    if (!form.sku.trim()) newErrors.sku = 'El SKU es requerido'
    if (!form.precio.trim()) newErrors.precio = 'El precio es requerido'
    if (parseFloat(form.precio) <= 0) newErrors.precio = 'El precio debe ser mayor a 0'
    if (!form.cantidad.trim()) newErrors.cantidad = 'La cantidad es requerida'
    if (parseInt(form.cantidad) < 1) newErrors.cantidad = 'La cantidad debe ser mayor a 1'
    if (Number.isNaN(parseInt(form.cantidad))) newErrors.cantidad = 'La cantidad debe ser un número'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleAccept = () => {
    if (!validateForm()) return
    if (editingId) {
      // actualizar
      setRecords(prev => prev.map(r => r.id === editingId ? { ...r, ...form } : r))
      alert(`Registro actualizado:` + JSON.stringify(form, null, 2))
    } else {
      // crear
      const newRecord = { id: Date.now(), ...form }
      setRecords(prev => [newRecord, ...prev])
      alert(`Registro creado:` + JSON.stringify(newRecord, null, 2))
    }
    setForm(empty)
    setEditingId(null)
    if (typeof onSectionChange === 'function') onSectionChange(section)
  }

  const handleEdit = (record) => {
    setForm({ nombre: record.nombre, descripcion: record.descripcion, sku: record.sku, precio: record.precio, cantidad: record.cantidad })
    setEditingId(record.id)
    if (typeof onSectionChange === 'function') onSectionChange(section)
  }

  const handleDelete = (id) => {
    const ok = window.confirm('¿Eliminar registro? Esta acción no se puede deshacer.')
    if (!ok) return
    setRecords(prev => prev.filter(r => r.id !== id))
  }

  const handleCancelEdit = () => {
    setForm(empty)
    setEditingId(null)
  }

  return (
    <div style={styles.workspaceWrapper}>
      <div style={styles.workspaceHeader}>
        <SubMenu
          items={["Productos", "Categorías", "Proveedores"]}
          active={section}
          onSelect={onSectionChange}
        />
      </div>

      <div style={styles.workspaceBody}>
        <div style={styles.leftPanel}>
          <h3>{section} - {editingId ? 'Editar' : 'Nuevo'}</h3>
          <label style={styles.inputLabel}>Nombre
            <input 
              style={{...styles.inputField, ...(errors.nombre && styles.inputError)}}
              name="nombre" 
              value={form.nombre} 
              onChange={handleChange}
              placeholder="Ingrese el nombre del producto"
            />
            {errors.nombre && <span style={styles.errorText}>{errors.nombre}</span>}
          </label>

          <label style={styles.inputLabel}>Descripción
            <input 
              style={{...styles.inputField, ...(errors.descripcion && styles.inputError)}}
              name="descripcion" 
              value={form.descripcion} 
              onChange={handleChange}
              placeholder="Ingrese una descripción del producto"
            />
            {errors.descripcion && <span style={styles.errorText}>{errors.descripcion}</span>}
          </label>

          <label style={styles.inputLabel}>SKU
            <input 
              style={{...styles.inputField, ...(errors.sku && styles.inputError)}}
              name="sku" 
              value={form.sku} 
              onChange={handleChange}
              placeholder="Ingrese el código SKU del producto"
            />
            {errors.sku && <span style={styles.errorText}>{errors.sku}</span>}
          </label>

          <label style={styles.inputLabel}>Precio
            <input 
              style={{...styles.inputField, ...(errors.precio && styles.inputError)}}
              name="precio" 
              value={form.precio} 
              onChange={handleChange}
              type="number"
              step="0.01"
              placeholder="Ingrese el precio del producto"
            />
            {errors.precio && <span style={styles.errorText}>{errors.precio}</span>}
          </label>

          <label style={styles.inputLabel}>Cantidad
            <input 
              style={{...styles.inputField, ...(errors.cantidad && styles.inputError)}}
              name="cantidad" 
              value={form.cantidad} 
              onChange={handleChange}
              type="number"
              placeholder="Ingrese la cantidad disponible"
            />
            {errors.cantidad && <span style={styles.errorText}>{errors.cantidad}</span>}
          </label>

          <div style={styles.acceptRow}>
            <button style={styles.acceptBtn} onClick={handleAccept}>{editingId ? 'Guardar' : 'Aceptar'}</button>
            {editingId && <button style={{ ...styles.actionButton, marginLeft: 8 }} onClick={handleCancelEdit}>Cancelar</button>}
          </div>
        </div>

        <div style={styles.rightPanel}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <h3 style={{ margin: 0 }}>{section} - Lista simulada</h3>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={styles.submenuBtn} onClick={() => setViewType('table')}>Tabla</button>
              <button style={styles.submenuBtn} onClick={() => setViewType('cards')}>Cards</button>
              <button style={styles.submenuBtn} onClick={() => setViewType('list')}>Lista</button>
              <button style={styles.submenuBtn} onClick={() => setViewType('grid')}>Grid</button>
            </div>
          </div>

          {/* Vistas variables */}
          {viewType === 'table' && (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Nombre</th>
                <th style={styles.th}>SKU</th>
                <th style={styles.th}>Precio</th>
                <th style={styles.th}>Cantidad</th>
                <th style={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {records.map(r => (
                <tr key={r.id}>
                  <td style={styles.td}>{r.nombre}</td>
                  <td style={styles.td}>{r.sku}</td>
                  <td style={styles.td}>${r.precio}</td>
                  <td style={styles.td}>{r.cantidad}</td>
                  <td style={styles.td}>
                    <button style={styles.editBtn} onClick={() => handleEdit(r)}>Editar</button>
                    <button style={{ ...styles.editBtn, marginLeft: 8 }} onClick={() => handleDelete(r.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          )}

          {viewType === 'cards' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 12 }}>
              {records.map(r => (
                <div key={r.id} style={{ border: '1px solid #e2e8f0', borderRadius: 8, padding: 12, background: '#fff' }}>
                  <strong>{r.nombre}</strong>
                  <div style={{ color: '#475569', fontSize: 13 }}>{r.descripcion}</div>
                  <div style={{ marginTop: 8, fontSize: 13 }}><strong>SKU:</strong> {r.sku}</div>
                  <div style={{ fontSize: 13 }}><strong>Precio:</strong> ${r.precio} — <strong>Cantidad:</strong> {r.cantidad}</div>
                  <div style={{ marginTop: 8 }}>
                    <button style={styles.editBtn} onClick={() => handleEdit(r)}>Editar</button>
                    <button style={{ ...styles.editBtn, marginLeft: 8 }} onClick={() => handleDelete(r.id)}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {viewType === 'list' && (
            <ul>
              {records.map(r => (
                <li key={r.id} style={{ padding: '8px 0', borderBottom: '1px solid #eef2f6' }}>
                  <strong>{r.nombre}</strong> — {r.sku} — ${r.precio} — {r.cantidad}
                  <div style={{ display: 'inline-block', marginLeft: 12 }}>
                    <button style={styles.editBtn} onClick={() => handleEdit(r)}>Editar</button>
                    <button style={{ ...styles.editBtn, marginLeft: 8 }} onClick={() => handleDelete(r.id)}>Eliminar</button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {viewType === 'grid' && (
            <div style={{ overflowX: 'auto' }}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>ID</th>
                    <th style={styles.th}>Nombre</th>
                    <th style={styles.th}>Descripción</th>
                    <th style={styles.th}>SKU</th>
                    <th style={styles.th}>Precio</th>
                    <th style={styles.th}>Cantidad</th>
                    <th style={styles.th}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map(r => (
                    <tr key={r.id}>
                      <td style={styles.td}>{r.id}</td>
                      <td style={styles.td}>{r.nombre}</td>
                      <td style={styles.td}>{r.descripcion}</td>
                      <td style={styles.td}>{r.sku}</td>
                      <td style={styles.td}>${r.precio}</td>
                      <td style={styles.td}>{r.cantidad}</td>
                      <td style={styles.td}>
                        <button style={styles.editBtn} onClick={() => handleEdit(r)}>Editar</button>
                        <button style={{ ...styles.editBtn, marginLeft: 8 }} onClick={() => handleDelete(r.id)}>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Crud() {
  const [section, setSection] = useState('Productos')

  return (
    <div style={styles.page}>
      <CrudHeader />
      <Workspace
        section={section}
        onSectionChange={setSection}
      />
    </div>
  )
}
