import React from 'react'
/*!
 * @export
 * @interface RenderComProps
 * @typedef {Object} {RenderComProps}
 * @property {string} label - 标签（文本）
 * @property {*} data - 数据
 */

/*!
 * 这是一个重要的注释
 * 这个文件的功能是...
 * @license MIT
 */
export interface RenderComProps {
  /**
   * 标签（文本）
   */
  label: string
  data: any
}
/**
 * RenderCom
 */
export interface RenderComProps {
  /**
   * 标签（文本）
   */
  label: string
}

const RenderCom: React.FC<RenderComProps> = React.memo(props => {
  // const [style, setStyle] = useState(props.style || {})

  return <div>Hello Demo--- {props.label ?? '测试'}</div>
})

export default RenderCom
