import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {store} from '@/redux'
import {Tag} from 'antd'

const Tags = () => {
    const [tags, setTags] = useState([])

    useEffect(() => {
        let unsubscribe = store.subscribe(() => {
            const {header} = store.getState()
            setTags(header.tags)

        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            {
                tags.map(tagItem => {
                    return (
                        <Tag closable key={tagItem}>
                            {tagItem}
                        </Tag>
                    )
                })
            }
        </>

    )
}
const mapStateToProps = (state: any) => {
    return state.header
}

export default connect(mapStateToProps, {})(Tags)
